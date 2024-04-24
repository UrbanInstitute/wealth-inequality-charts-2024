<script>
  /** @type {boolean} [true] Set to false to skip initial pageview*/
  export let sendPageview = true;
</script>

<svelte:head>
  <!-- Google Tag Manager -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0EZ8ZMM8T"></script>
  {#if sendPageview}
    <script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T");
    </script>
  {:else}
    <script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = function ({}) {
        dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-N0EZ8ZMM8T", {
        send_page_view: false,
      });
    </script>
  {/if}
  <!-- End Google Tag Manager -->
</svelte:head>
