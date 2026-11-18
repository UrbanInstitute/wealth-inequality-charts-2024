<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script>
  import { Analytics, FontsUrban, Theme } from "@urbaninstitute/dataviz-components";
  import site_content from "#data/site_content.json";

  /** @type {{ children: import("svelte").Snippet }} */
  let { children } = $props();
</script>
<FontsUrban />
<Analytics title={site_content.meta.title} mode={import.meta.env.MODE}/>
<Theme>
  {@render children()}
</Theme>
