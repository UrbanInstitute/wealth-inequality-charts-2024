<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import "../app.css";
  import { getAbsoluteUrl } from "#lib/utils/urls.js";
  import { isList } from "#lib/utils/content.js";
  import {
    Block,
    Meta,
    TextBlock,
    ProjectCredits,
    HeadingAlt,
    Navbar
  } from "@urbaninstitute/dataviz-components";
  import Hero from "#components/Hero/Hero.svelte";
  import ChartSection from "#components/ChartSection/ChartSection.svelte";
  import site_content from "#data/site_content.json";

</script>

<Meta
  title={site_content.meta.title}
  publishDate={site_content.meta.date}
  description={site_content.meta.description}
  url={getAbsoluteUrl("")}
  socialImage={getAbsoluteUrl("meta.jpg")}
  authors={site_content.meta.authors}
  keywords={site_content.meta.keywords}
  articleSection="Features"
/>
<Navbar title={site_content.meta.title} sticky />
<Hero
  headline={site_content.meta.title}
  date={site_content.meta.date}
  image="hero-image.jpg"
  imageAlt="Photo of a new parents standing in their front yard with their new baby girl on a warm summer day."
  imageCredit="Photo by jhorrocks/Getty Images"
  eyebrow="Story"
  shareUrl={getAbsoluteUrl("")}
/>
<main>
  {#each site_content.intro as block}
    <TextBlock>
      {@html block.value}
    </TextBlock>
  {/each}
  {#each site_content.sections as section}
    <ChartSection {...section} />
  {/each}
  <section class="outro-section">
    {#each site_content.outro as block}
      {#if block.type === "h2"}
        <Block>
          <h2 id="promising-federal-policies">{@html block.value}</h2>
        </Block>
      {:else if isList(block.value)}
        <Block>
          <div class="outro-list">{@html block.value}</div>
        </Block>
      {:else}
      <TextBlock>
        {@html block.value}
      </TextBlock>
      {/if}
    {/each}
  </section>
  <section class="about-data-section">
    <Block>
      <HeadingAlt content={site_content.about.heading} />
    </Block>
    {#each site_content.about.text as text}
      <TextBlock>
        {@html text.value}
      </TextBlock>
    {/each}
  </section>
  <section class="credits-section">
    <ProjectCredits {...site_content.credits}>
      {#snippet intro()}
        {#each site_content.credits.text as text}
          <TextBlock>{@html text}</TextBlock>
        {/each}
      {/snippet}
    </ProjectCredits>
  </section>
</main>

<style>
  main {
    max-width: 1160px;
    margin: 0 auto;
  }
  .credits-section, .about-data-section, .outro-section {
    margin-top: var(--spacing-20);
  }

  .outro-section h2 {
    margin-bottom: var(--spacing-8);
    /* Keep the jump-link target clear of the sticky navbar */
    scroll-margin-top: var(--spacing-20);
  }

  /* Outro lists sit outside TextBlock (a <p>), so match its type here */
  div.outro-list {
    margin-bottom: var(--spacing-8);
  }
  div.outro-list :global(li) {
    font-size: var(--font-size-large);
    line-height: var(--line-height-normal);
    margin-bottom: var(--spacing-2);
  }

  /*
   * Typography overrides: restore the pre-2.x sizes. These selectors are more specific than the
   * `.theme p`/`.theme hN` rules from dataviz-components 2.x.
   */
  main :global(p.text-block) {
    font-size: var(--font-size-large);
    line-height: var(--line-height-normal);
  }
  main :global(h3.heading-alt) {
    font-size: var(--font-size-2xl);
    line-height: var(--line-height-normal);
  }
  section.outro-section h2 {
    font-size: var(--font-size-3xl);
    line-height: var(--line-height-snug);
  }
  :global(.theme nav p.nav--page-title) {
    line-height: var(--line-height-normal);
  }

  @media (min-width: 769px) {
    main :global(p.text-block) {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }
    main :global(h3.heading-alt) {
      font-size: var(--font-size-3xl);
    }
    section.outro-section h2 {
      font-size: var(--font-size-4xl);
    }
    div.outro-list :global(li) {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-relaxed);
    }
    :global(.theme nav p.nav--page-title) {
      line-height: var(--line-height-relaxed);
    }
  }
  .outro-section {
    border-top: solid 1px var(--color-gray);
    padding-top: var(--spacing-20);
  }

  .credits-section :global(a) {
    text-decoration: none;
  }
  .credits-section :global(a:hover) {
    color: var(--color-blue-shade-dark);
  }
</style>
