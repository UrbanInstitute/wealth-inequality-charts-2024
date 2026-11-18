<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import { logClickToGA } from "@urbaninstitute/dataviz-components";

  /**
   * @typedef {Object} Props
   * @property {string[][]} [items] - List of variants
   * @property {string} label - Accessible label for the group
   * @property {string[]} activeItem - Current active item (one value per variant group)
   */

  /** @type {Props} */
  let { items = [[]], label, activeItem = $bindable() } = $props();
</script>

{#if items[0].length > 1}
  {#each items as item, i}
    <div class="chart-selector-wrap" role="radiogroup" aria-label={label}>
      {#each item as variant}
        <button
          class="chart-selector-item"
          tabindex={0}
          role="radio"
          aria-checked={activeItem.includes(variant)}
          onclick={(e) => {
            // set item (reassign so the bound value updates in the parent)
            activeItem = activeItem.map((v, j) => (j === i ? variant : v));

            // send analytics click
            logClickToGA(
              e.target,
              "chart-select-click--" + e?.target?.textContent);
          }}>{variant}</button
        >
      {/each}
    </div>
  {/each}
{/if}

<style>
  .chart-selector-wrap {
    margin-bottom: var(--spacing-4);
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--spacing-4);
    row-gap: var(--spacing-4);
  }
  .chart-selector-item {
    flex-shrink: 0;
    appearance: none;
    background: var(--color-black);
    border: none;
    color: var(--color-white);
    cursor: pointer;
    font-size: var(--font-size-large);
    font-family: var(--font-family-sans);
    font-weight: var(--font-weight-bold);
    padding: var(--spacing-4);
  }
  .chart-selector-item:hover {
    background: var(--color-blue-shade-dark);
  }
  .chart-selector-item[aria-checked="true"] {
    background: var(--color-blue);
  }
</style>
