<script lang="ts">
  let showNavigation: Boolean = false;
  export let showComponent: Boolean = false;

  function toggleNavigation() {
    showNavigation = !showNavigation;
  }
  function toggleShowComponent() {
    showComponent = true;
    showNavigation = showNavigation ? !showNavigation : showNavigation;
  }
</script>

<div
  class="flex justify-between p-2 border shadow-[1px_1px_10px_1px_rgba(0,0,0,0.12)]"
>
  <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
    <span class="font-semibold text-xl tracking-tight"
      >Svelte Custom Components</span
    >
  </div>
  <div class="block lg:hidden ">
    <button
      on:click={toggleNavigation}
      id="nav"
      class="flex items-center px-3 py-2 border-2 rounded text-cyan-700 border-cyan-700 hover:text-cyan-700 hover:border-cyan-700"
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
</div>