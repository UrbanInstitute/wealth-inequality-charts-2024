<script>
  import { Block, SocialShare } from "@urbaninstitute/dataviz-components";

  /** @type {string} */
  export let headline;
  /** @type {string | null} */
  export let subhead = null;
  /** @type {string} */
  export let date;

  /**
   * Optional URL to share on social media. Will include social buttons if defined.
   * @type {string | null}
   */
  export let shareUrl = null;

  /** @type {string} */
  export let eyebrow;
</script>

<div class="headline-wrap">
  <p class="headline-eyebrow">{eyebrow}</p>
  <h1 class="headline--page-headline">{headline}</h1>
  {#if subhead}
    <p class="headline--subhead">{subhead}</p>
  {/if}
  <p class="headline--date"><time>{date}</time></p>
</div>
{#if shareUrl}
  <SocialShare {shareUrl} />
{/if}

<style>
  .headline-wrap {
    text-align: center;
    border-bottom: solid 1px var(--color-gray);
    padding-bottom: var(--spacing-12);
    margin-bottom: var(--spacing-8);
    margin-top: var(--spacing-12);
  }
  .headline--page-headline {
    margin-bottom: var(--spacing-6);
    margin-top: 0;
  }
  .headline-wrap p {
    margin-bottom: 0;
  }
  .headline--subhead {
    margin-bottom: var(--spacing-12);
    color: var(--color-gray-shade-darkest);
  }
  .headline--date {
    color: var(--color-gray-shade-darker);
    font-size: var(--font-size-small);
  }
  .headline-eyebrow {
    font-size: var(--font-size-small);
    text-transform: uppercase;
  }

  @media screen and (min-width: 769px) {
    .headline-wrap {
      margin-top: var(--spacing-20);
    }
  }
</style>
