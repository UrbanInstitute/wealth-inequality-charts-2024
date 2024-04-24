<script>
  import { logClickToGA } from "@urbaninstitute/dataviz-components";
  /**
   * List of variants
   * @type {string[][]}
   */
  export let items = [[]];

  /**
   * Accessible label for the group
   * @type {string}
   */
  export let label;

  /**
   * Current active item
   * @type {string[]} [activeItem=[]]
   */
  export let activeItem = items.map(([first, ...rest]) => first);
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
          on:click={(e) => {
            // set item
            activeItem[i] = variant;

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
