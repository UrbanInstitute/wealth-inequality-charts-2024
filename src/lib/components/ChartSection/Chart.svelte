<script context="module">
  /**
   * @typedef {{id: string, label: string, variant: string[], height: number}} Chart
   */
</script>

<script>
  import Datawrapper from "./Datawrapper.svelte";
  import ChartSelector from "./ChartSelector.svelte";
  /**
   * Chart title
   * @type {string}
   */
  export let title;

  /**
   * Chart description
   * @type {string}
   */
  export let description;

  /**
   * Chart accessibile label
   * @type {string}
   */
  export let label;

  /**
   * Chart source
   * @type {string}
   */
  export let source;

  /**
   * Chart notes
   * @type {string}
   */
  export let notes;

  /**
   * Chart Datawrapper ID
   * @type {string}
   */
  export let id;

  /**
   * Height of chart embed
   * @type {number}
   */
  export let chart_height;

  /**
   * Default chart variant
   * @type {string}
   */
  export let default_chart;

  /**
   * List of chart objects
   * @type {Chart[]}
   */
  export let charts;


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

  /** @type {string[]} */
  let activeVariant;

  $: if (default_chart) {
    activeVariant = variantKeyToList(default_chart);
  }

  $: chartLookup = getChartLookup(charts);
  $: chartVariants = getChartVariants(Array.from(chartLookup.keys()).map(variantKeyToList));
  $: activeChart = chartLookup.get(variantListToKey(activeVariant)) || charts[0];
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
