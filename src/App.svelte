<script lang="ts">
    import "./app.css"
    import TopNavBar from "./lib/Pages/TopNavBar.svelte";
    import Components from "./lib/Pages/Components.svelte";
    let showComponent: boolean = false;
</script>

<TopNavBar bind:showComponent/>

{#if  showComponent}
    <Components/>
{/if}