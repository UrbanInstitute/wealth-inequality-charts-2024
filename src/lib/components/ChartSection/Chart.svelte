<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script module>
  /**
   * @typedef {{id: string, label: string, variant: string[], height: number}} Chart
   */
</script>

<script>
  import Datawrapper from "./Datawrapper.svelte";
  import ChartSelector from "./ChartSelector.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} title - Chart title
   * @property {string} description - Chart description
   * @property {string} label - Chart accessibile label
   * @property {string} source - Chart source
   * @property {string} notes - Chart notes
   * @property {string} id - Chart Datawrapper ID
   * @property {number} chart_height - Height of chart embed
   * @property {string} default_chart - Default chart variant
   * @property {Chart[]} charts - List of chart objects
   */

  /** @type {Props} */
  let {
    title,
    description,
    label,
    source,
    notes,
    id,
    chart_height,
    default_chart,
    charts
  } = $props();

  /**
   * @param {string[][]} variantsList
   * @returns {string[][]}
   */
  function getChartVariants(variantsList) {
    const variantGroupCount = variantsList[0].length;
    /** @type {string[][]} */
    let result = [];
    for (let i = 0; i < variantGroupCount; i++) {
      const variants = variantsList.map((variant) => variant[i]);
      result.push(Array.from(new Set(variants)));
    }
    return result;
  }
  /**
   * @param {Chart[]} charts
   * @returns {Map<string, Chart>}
   */
  function getChartLookup(charts) {
    /* @type {Map<string, Chart>} */
    let result = new Map();
    for (const chart of charts) {
      result.set(variantListToKey(chart.variant), chart);
    }
    return result;
  }

  /**
   * @param {string[]} variantList
   * @returns {string}
   */
  function variantListToKey(variantList) {
    if (typeof variantList === "undefined" || variantList.length === 0) return "";
    return variantList.join("/");
  }

  function variantKeyToList(variantKey) {
    return variantKey.split("/");
  }

  let chartLookup = $derived(getChartLookup(charts));
  let chartVariants = $derived(getChartVariants(Array.from(chartLookup.keys()).map(variantKeyToList)));

  /**
   * Selected value for each variant group. Starts at `default_chart` if set, otherwise the first
   * option in each group.
   * @type {string[]}
   */
  let activeVariant = $derived(
    default_chart ? variantKeyToList(default_chart) : chartVariants.map(([first]) => first)
  );

  let activeChart = $derived(chartLookup.get(variantListToKey(activeVariant)) || charts[0]);
</script>

<div class="chart-wrapper">
  <!-- <h2 class="chart-title">{title}</h2> -->
  <!-- <p class="chart-description">{description}</p> -->
  {#if chart_height}
    <Datawrapper chartId={activeChart.id} {title} {label} height={parseInt(chart_height)} />
  {:else}
    <Datawrapper chartId={activeChart.id} {title} {label} />
  {/if}
  <ChartSelector items={chartVariants} bind:activeItem={activeVariant} label="Select chart" />
  <!-- <div class="chart-footer"> -->
  <!--   <p class="chart-source"><strong>Source:</strong> {source}</p> -->
  <!--   <p class="chart-source"><strong>Notes:</strong> {notes}</p> -->
  <!-- </div> -->
</div>

<style>
  .chart-title {
    font-size: var(--font-size-xl);
  }
  .chart-description {
    font-size: var(--font-size-normal);
  }
  .chart-source {
    font-size: 12px;
    margin: 0;
  }
</style>
