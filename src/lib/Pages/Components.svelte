<script lang="ts">
  import { ComponentsEnum } from "../Enums/Components";

  import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

  let Components = Object.values(ComponentsEnum);
  let CurrentComponent: string = "";
  let ComponentValue: any;
</script>

<div class="container mx-auto mt-6">
  <div class="flex">
    <div class="mb-3 xl:w-96">
      <select
        class="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        bind:value={CurrentComponent}
        aria-label="Default select example"
      >
        <option class="block w-full" value="" selected>Select component</option>
        {#each Components as component}
          <option class="block w-full" value={component}>{component}</option>
        {/each}
      </select>
    </div>
  </div>
  {#if CurrentComponent === ComponentsEnum.CurrencyInput}
    <div class="grid grid-cols-1 gap-4">
      <div class="mb-3 xl:w-96">
        <CurrencyInput
          bind:value={ComponentValue}
          customClass="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-3 xl:w-96">
        Current Value: {ComponentValue}
      </div>
    </div>
  {/if}
</div>
