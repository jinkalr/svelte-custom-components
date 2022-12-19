<script lang="ts">
    import "./app.css"
    import TopNavBar from "./lib/Pages/TopNavBar.svelte";
    import Components from "./lib/Pages/Components.svelte";
    import Introduction from "./lib/Pages/Introduction.svelte";
    let showComponent: boolean = false;
</script>

<TopNavBar bind:showComponent/>
<div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25" style=  "background-position:10px 10px">
    <div class="relative rounded-xl overflow-auto p-8">
        <Introduction/>
{#if  showComponent}
    <Components/>
{/if}
</div>
</div>

