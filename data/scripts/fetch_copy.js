#!/usr/bin/env node

/*******************************************************************************
 * Hat tip to Jeff MacInnes For this approach
 * https://github.com/UrbanInstitute/affordable-housing-shortage-and-zoning/blob/main/scripts/fetch-google.js
 ******************************************************************************/

import fs from "fs";
import archieml from "archieml";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";
import { csvParse, autoType } from "d3-dsv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, "../..");

const docs = [
  {
    id: "1Ex21kPlfDgfYN1deDhLtocy95WC4V-TeajCVNq37hv4",
    filepath: path.resolve(projectDir, "src/data", "site_content.json")
  }
];

function parseVariants(rawChart) {
  if ("variant" in rawChart) {
    return rawChart.variant.split("/");
  } else {
    return [];
  }
}

function parseCharts(rawContent) {
  const newSections = rawContent.sections.map((section) => {
    section.charts = section.charts.map((chart) => {
      chart.variant = parseVariants(chart);
      return chart;
    });
    // check to make sure all charts in a section have the same number of variants specified
    const variantCount = section.charts[0].variant.length;
    for (const chart of section.charts) {
      if (chart.variant.length !== variantCount) {
        console.warn(
          "ERROR: Chart does not have consistent number of variants. Please make sure all variants have a consistent number of keys in the source document and retry."
        );
        console.log(chart);
        process.exit(1);
      }
    }
    return section;
  });
  return Object.assign(rawContent, { sections: newSections });
}

/**
 * Parse string containing ArchieML formatted text into JSON
 * @param {string} rawContent
 * @returns {Object}
 */
function parseArchie(rawContent) {
  const parsed = parseCharts(archieml.load(rawContent));
  const str = JSON.stringify(parsed);
  return str;
}

/**
 * Parse string containing CSV formatted data into JSON
 * @param {string} rawContent
 * @returns {Object}
 */
function parseSheet(rawContent) {
  // parse sheet data as JSON
  let data = csvParse(rawContent, autoType);
  return JSON.stringify(data, null, 2);
}

const fetchGoogle = async ({ id, gid }) => {
  console.log(`fetching...${id}`);

  const base = "https://docs.google.com";
  const post = gid
    ? `spreadsheets/u/1/d/${id}/export?format=csv&id=${id}&gid=${gid}`
    : `document/d/${id}/export?format=txt`;
  const url = `${base}/${post}`;

  try {
    const response = await fetch(url);
    const text = await response.text();

    // if URL contains 'GID' parse as a sheet, otherwise as ArchieML
    if (gid) {
      return parseSheet(text);
    }
    return parseArchie(text);

  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  for (let d of docs) {
    try {
      const str = await fetchGoogle(d);
      const file = `${d.filepath}`;
      fs.writeFileSync(file, str);
    } catch (err) {
      console.log(err);
    }
  }
})();
