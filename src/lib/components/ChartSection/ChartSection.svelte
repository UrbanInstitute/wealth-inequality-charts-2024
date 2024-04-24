<script>
  import SectionBreak from "$lib/components/SectionBreak/SectionBreak.svelte";
  import Chart from "./Chart.svelte";

  /** @type {{type: string, value: string}[]} */
  export let content = [];

  /** @type {Number} */
  export let section;

  /** @type {string} */
  export let subhead;

  /** @type {string} */
  export let chart_title;

  /** @type {string} */
  export let chart_description;

  /** @type {string} */
  export let chart_source;

  /** @type {string} */
  export let chart_notes;

  /** @type {string} */
  export let chart_label;

  /** @type {number | null} */
  export let chart_height = null;

  /** @type {string} */
  export let default_chart;

  /** @type {import("./Chart.svelte").Chart[]} */
  export let charts = [];
</script>

<section>
  <SectionBreak number={section.toString()} {subhead} />
  <div class="section-wrapper">
    <figure class="section-chart-wrapper">
      <Chart
        title={chart_title}
        description={chart_description}
        source={chart_source}
        notes={chart_notes}
        label={chart_label}
        {chart_height}
        {default_chart}
        {charts}
      />
    </figure>
    <div class="section-text-wrapper">
      {#each content as block}
        <div class="content-block">
          {#if block.type == "h4"}
            <h4 class="section-text-small-header">{@html block.value}</h4>
          {:else}
            <p>{@html block.value}</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    margin: 0 var(--spacing-4);
  }
  .section-chart-wrapper {
    margin: 0;
  }
  .section-wrapper :global(.chart-wrapper) {
    position: sticky;
    top: var(--spacing-20);
  }

  h4.section-text-small-header {
    margin: var(--spacing-8) 0 var(--spacing-4);
  }

  .section-chart-wrapper :global(.chart-wrapper) :global(.layout-block.body) {
    margin: 0;
  }

  .section-text-wrapper p {
    font-size: var(--font-size-large);
  }

  @media (min-width: 980px) {
    .section-chart-wrapper {
      flex-shrink: 0;
      display: block;
      width: 50%;
    }
    .section-wrapper {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: var(--spacing-12);
    }
  }
  @media (min-width: 1208px) {
    section {
      margin: 0 auto;
    }
    .section-chart-wrapper {
      width: 65%;
    }
  }
</style>
