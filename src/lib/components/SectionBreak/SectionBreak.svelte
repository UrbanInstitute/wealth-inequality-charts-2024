<script>
  /** @type { string } **/
  export let number;
  /** @type { string } **/
  export let subhead;
  /** @type { string } **/
  export let accentColor = "#9d9d9d";
</script>

<div class="section-break" style:--accent-color={accentColor}>
  <span class="section-number">{number}.</span>
  <div class="section-line" />
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
    .section-line {
      /* transform: translateY(0); */
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
</style>
