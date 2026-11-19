// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.

import { resolve } from "$app/paths";

/** Constants for constructing absolute URLs in different project environemnts. */
export const STAGING_BASE_URL = "https://apps-staging.urban.org";
export const PRODUCTION_BASE_URL = "https://apps.urban.org";

/**
 * @description: Takes a relative project URL and returns one with the base path prepended.
 * @param {string} url - The relative project URL.
 * @return {string} The relative URL with the base path prepended.
 */
export function getProjectUrl(url) {
  // resolve("/") returns the base path plus a trailing slash, e.g. "/features/my-project/"
  return `${resolve("/")}${url}`;
}

/**
 * @description: Takes a relative project URL and returns an absolute URL based on the current environment.
 * @param {string} url - The relative project URL
 * @return {string} The resulting absolute URL.
 */
export function getAbsoluteUrl(url) {
  const mode = import.meta.env.MODE;
  if (mode === "production") {
    return `${PRODUCTION_BASE_URL}${getProjectUrl(url)}`;
  }
  if (mode === "staging") {
    return `${STAGING_BASE_URL}${getProjectUrl(url)}`;
  }
  return getProjectUrl(url);
}
