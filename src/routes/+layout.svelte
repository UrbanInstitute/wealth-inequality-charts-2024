<script>
  import { Analytics, Theme } from "@urbaninstitute/dataviz-components";
  import site_content from "$data/site_content.json";
</script>
<Analytics title={site_content.meta.title} mode={import.meta.env.MODE}/>
<Theme>
  <slot></slot>
</Theme>
