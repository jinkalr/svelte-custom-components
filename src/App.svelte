<!-- <script lang="ts">
  import "./app.css";
  import TopNavBar from "./lib/Pages/TopNavBar.svelte";
  import Components from "./lib/Pages/Components.svelte";
  import Introduction from "./lib/Pages/Introduction.svelte";
    import SideNavPanel from "./lib/Pages/_navigation/sideNavPanel.svelte";
  let showComponent: boolean = false;
</script>

<TopNavBar bind:showComponent />
<SideNavPanel></SideNavPanel>
<div
  class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"
  style="background-position:10px 10px"
>
  <div class="relative rounded-xl overflow-auto p-8">
    <Introduction />
    {#if showComponent}
      <Components />
    {/if}
  </div>
</div> -->

<script lang="ts">
    import "./lib/tailwind.css";
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
  </script>
  
  <Router {routes} />
  