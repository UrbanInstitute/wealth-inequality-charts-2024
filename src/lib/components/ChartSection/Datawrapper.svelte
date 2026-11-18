<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->

<script module>
  if (typeof window !== "undefined") {
    window.addEventListener("message", function (a) {
      if (void 0 !== a.data["datawrapper-height"]) {
        var e = document.querySelectorAll("iframe");
        for (var t in a.data["datawrapper-height"]) {
          for (var r = 0; r < e.length; r++) {
            if (e[r].contentWindow === a.source) {
              var i = a.data["datawrapper-height"][t] + "px";
              e[r].style.height = i;
            }
          }
        }
      }
    });
  }
</script>

<script>
  import { Block } from "@urbaninstitute/dataviz-components";

  /**
   * @typedef {Object} Props
   * @property {string} chartId
   * @property {string} title
   * @property {string} label
   * @property {number} [height] - The height of the datawrapper embed
   */

  /** @type {Props} */
  let { chartId, title, label, height = 500 } = $props();
</script>

<Block>
  <div class="chart-wrapper">
    <iframe
      {title}
      aria-label={label}
      id="datawrapper-chart-{chartId}"
      src="https://datawrapper.dwcdn.net/{chartId}/"
      scrolling="no"
      frameborder="0"
      style="width: 0; min-width: 100% !important; border: none;"
      {height}
      data-external="1"
    ></iframe>
  </div>
</Block>

<style>
  .chart-wrapper {
    width: 100%;
    min-height: 400px;
    margin-bottom: var(--spacing-4);
  }
  iframe {
    background: var(--color-white);
  }
</style>
