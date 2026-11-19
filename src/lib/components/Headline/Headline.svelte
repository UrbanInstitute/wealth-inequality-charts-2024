<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import { Block, SocialShare } from "@urbaninstitute/dataviz-components";

  /**
   * @typedef {Object} Props
   * @property {string} headline
   * @property {string | null} [subhead]
   * @property {string} date
   * @property {string | null} [shareUrl] - Optional URL to share on social media. Will include social buttons if defined.
   * @property {string} eyebrow
   */

  /** @type {Props} */
  let { headline, subhead = null, date, shareUrl = null, eyebrow } = $props();
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

  /* Typography overrides: the parent class beats the `.theme p` rule from dataviz-components 2.x.
     The h1 intentionally uses the 2.x theme size. */
  .headline-wrap .headline-eyebrow,
  .headline-wrap .headline--date {
    font-size: var(--font-size-small);
    line-height: var(--line-height-normal);
  }
  .headline-wrap .headline--date {
    color: var(--color-gray-shade-darker);
  }

  @media screen and (min-width: 769px) {
    .headline-wrap {
      margin-top: var(--spacing-20);
    }
    .headline-wrap .headline-eyebrow,
    .headline-wrap .headline--date {
      line-height: var(--line-height-relaxed);
    }
  }
</style>
