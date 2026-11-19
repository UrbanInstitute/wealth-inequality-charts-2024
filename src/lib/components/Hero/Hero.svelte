<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import { Block } from "@urbaninstitute/dataviz-components";
  import Headline from "../Headline/Headline.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} headline
   * @property {string | null} [subhead]
   * @property {string} date
   * @property {string | null} [image]
   * @property {string | null} [imageAlt]
   * @property {string | null} [imageCredit]
   * @property {string | null} [shareUrl] - Optional URL to share on social media. Will include social buttons if defined.
   * @property {string} eyebrow
   */

  /** @type {Props} */
  let {
    headline,
    subhead = null,
    date,
    image = null,
    imageAlt = null,
    imageCredit = null,
    shareUrl = null,
    eyebrow
  } = $props();
</script>

<div class="hero-wrap">
  {#if image}
    <figure>
      <div class="hero-image-wrap">
        <img src={image} alt={imageAlt} class="hero-image" />
      </div>
      {#if imageCredit}
        <figcaption>
          <p>{imageCredit}</p>
        </figcaption>
      {/if}
    </figure>
  {/if}
  <Block width="wide">
    <Headline {headline} {subhead} {date} {shareUrl} {eyebrow}/>
  </Block>
</div>

<style>
  figure {
    margin: 0;
  }
  figcaption {
    margin-left: var(--spacing-4);
    margin-top: var(--spacing-4);
  }
  /* Parent class beats the `.theme p` rule from dataviz-components 2.x */
  .hero-wrap figcaption p {
    font-size: var(--font-size-small);
    line-height: var(--line-height-normal);
    font-style: italic;
    margin-bottom: 0;
    margin: 0;
  }
  .hero-wrap {
    margin-bottom: var(--spacing-8);
  }
  .hero-image-wrap {
    width: 100%;
    height: 500px;
    min-height: 33.33vw;
    max-height: 100vw;
  }
  .hero-image-wrap img {
    display: block;
    object-fit: cover;
    object-position: center 33.33%;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 376px) {
    .hero-wrap {
      margin-bottom: var(--spacing-12);
    }
  }
  @media screen and (min-width: 768px) {
    .hero-wrap {
      margin-bottom: var(--spacing-16);
    }
  }
  @media screen and (min-width: 769px) {
    .hero-wrap figcaption p {
      line-height: var(--line-height-relaxed);
    }
  }
</style>
