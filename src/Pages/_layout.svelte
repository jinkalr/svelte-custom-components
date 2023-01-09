<script lang="ts">
  import SideNavPanel from "./_navigation/sideNavPanel.svelte";
  import TopNavPanel from "./_navigation/topNavPanel.svelte";
  import Card from "./_components/card.svelte";

  let value = false;
  $: cls = value ? "" : "hidden";
</script>

<div>
  <div class="drawer drawer-mobile">
    <input
      id="main-drawer"
      type="checkbox"
      class="drawer-toggle"
      bind:checked={value}
    />
    <div class="drawer-overlay {cls}" on:click={() => (value = false)} />
    <div
      class="drawer-content flex-col items-center justify-center bg-primary-content"
    >
      <TopNavPanel />
      <div class="overflow p-3">
        <Card>
          <div slot="body">
            <slot />
          </div>
        </Card>
      </div>
    </div>
    <SideNavPanel on:closeSidebar={() => (value = false)} />
  </div>
</div>
