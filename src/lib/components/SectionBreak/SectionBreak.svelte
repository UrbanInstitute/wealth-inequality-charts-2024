<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  /**
   * @typedef {Object} Props
   * @property {string} number
   * @property {string} subhead
   * @property {string} [accentColor]
   */

  /** @type {Props} */
  let { number, subhead, accentColor = "#9d9d9d" } = $props();
</script>

<div class="section-break" style:--accent-color={accentColor}>
  <span class="section-number">{number}.</span>
  <div class="section-line"></div>
</div>
<h2>{subhead}</h2>

<style>
  .section-break {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-bottom: var(--spacing-6);
    margin-top: var(--spacing-10);
  }
  .section-number {
    font-size: 5rem;
    color: var(--accent-color, #9d9d9d);
    line-height: 1;
    margin-right: var(--spacing-6);
    flex-shrink: 0;
    font-family: Lato;
  }
  .section-line {
    width: 100%;
    border-bottom: solid 1px var(--accent-color, #9d9d9d);
    transform: translateY(-10px);
    flex-shrink: 1;
  }

  h2 {
    margin-bottom: var(--spacing-4);
  }
  /* Typography override: must be more specific than `.theme h2` from dataviz-components 2.x.
     Svelte wraps later scoping classes in :where(), so `.section-break + h2` alone only ties it. */
  div.section-break + h2 {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-snug);
  }
  @media screen and (min-width: 461px) {
    .section-break {
      margin-bottom: var(--spacing-8);
      margin-top: var(--spacing-16);
    }
    h2 {
      margin-bottom: var(--spacing-6);
    }
  }
  @media screen and (min-width: 769px) {
    h2 {
      margin-bottom: var(--spacing-8);
    }
    .section-break {
      margin-bottom: var(--spacing-12);
      margin-top: var(--spacing-20);
    }
    .section-number {
      margin-right: var(--spacing-4);
    }
    div.section-break + h2 {
      font-size: var(--font-size-4xl);
    }
    .section-line {
      /* transform: translateY(0); */
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
</style>
