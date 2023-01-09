<script lang="ts">
  import { isActive, url } from "@roxi/routify";
  import { createEventDispatcher } from "svelte";
    import { NavigationHelpers } from "../../code/NavigationHelpers";

  const dispatch = createEventDispatcher();

  const navItems = NavigationHelpers.sideNavMenuItem;
</script>

<div class="drawer-side flex flex-col border shadow-[1px_1px_10px_1px_rgba(0,0,0,0.12)]">
  <label for="main-drawer" class="drawer-overlay" />
  <div
    class="menu overflow-y-auto font-semibold"
  >
    <div class="p-2">
     Svelte Custom Components
    </div>
    <ul class="space-y-1 mt-2 flex-1">
      {#each navItems as item}
      <li>
        <a
          href={$url(item.link)}
          on:click={() => {
            dispatch("closeSidebar");
          }}
          class:bg-dark-focus={$isActive(item.link)}
        >
          {item.name}
        </a>
      </li>
    {/each}
  </div>
</div>
