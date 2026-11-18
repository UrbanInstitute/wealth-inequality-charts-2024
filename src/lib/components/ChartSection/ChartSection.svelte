<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import SectionBreak from "#lib/components/SectionBreak/SectionBreak.svelte";
  import Chart from "./Chart.svelte";
  import { isList } from "#lib/utils/content.js";

  /**
   * @typedef {Object} Props
   * @property {{type: string, value: string}[]} [content]
   * @property {Number} section
   * @property {string} subhead
   * @property {string} chart_title
   * @property {string} chart_description
   * @property {string} chart_source
   * @property {string} chart_notes
   * @property {string} chart_label
   * @property {number | null} [chart_height]
   * @property {string} default_chart
   * @property {import("./Chart.svelte").Chart[]} [charts]
   */

  /** @type {Props} */
  let {
    content = [],
    section,
    subhead,
    chart_title,
    chart_description,
    chart_source,
    chart_notes,
    chart_label,
    chart_height = null,
    default_chart,
    charts = []
  } = $props();
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
          {:else if block.type == "h5"}
            <h5 class="section-text-subhead">{@html block.value}</h5>
          {:else if isList(block.value)}
            {@html block.value}
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

  /* Federal / State and Local subheads: font comes from the Theme h5 styles; only set spacing. */
  h5.section-text-subhead {
    margin: var(--spacing-6) 0 var(--spacing-2);
  }
  /* Beat `.theme h5`: 20/28 on small screens, 24/32 above 768px. */
  div.section-text-wrapper h5.section-text-subhead {
    font-size: var(--font-size-xl);
    line-height: 28px;
  }
  @media (min-width: 769px) {
    div.section-text-wrapper h5.section-text-subhead {
      font-size: var(--font-size-2xl);
      line-height: 32px;
    }
  }

  /* Typography overrides: must be more specific than `.theme p`/`.theme h4` from dataviz-components 2.x.
     Svelte wraps later scoping classes in :where(), so qualify the parent with its element. */
  .section-text-wrapper h4.section-text-small-header {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-normal);
  }
  div.section-text-wrapper :global(li) {
    font-size: var(--font-size-large);
    line-height: var(--line-height-normal);
  }

  .section-chart-wrapper :global(.chart-wrapper) :global(.layout-block.body) {
    margin: 0;
  }

  div.section-text-wrapper p {
    font-size: var(--font-size-large);
    line-height: var(--line-height-normal);
  }

  @media (min-width: 769px) {
    .section-text-wrapper h4.section-text-small-header {
      font-size: var(--font-size-2xl);
    }
    div.section-text-wrapper p,
    div.section-text-wrapper :global(li) {
      line-height: var(--line-height-relaxed);
    }
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
