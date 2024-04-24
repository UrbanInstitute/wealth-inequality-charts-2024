<script>
  import { Block } from "@urbaninstitute/dataviz-components";
  import Headline from "../Headline/Headline.svelte";

  /** @type {string} */
  export let headline;
  /** @type {string | null} */
  export let subhead = null;
  /** @type {string} */
  export let date;

  /** @type {string | null} */
  export let image = null;

  /** @type {string | null} */
  export let imageAlt = null;

  /** @type {string | null} */
  export let imageCredit = null;

  /**
   * Optional URL to share on social media. Will include social buttons if defined.
   * @type {string | null}
   */
  export let shareUrl = null;

  /** @type {string} */
  export let eyebrow;
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
  figcaption p {
    font-size: var(--font-size-small);
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
</style>
