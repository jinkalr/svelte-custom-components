<script lang="ts">
  import { ComponentsEnum } from "../Enums/Components";

  import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

  let Components = Object.values(ComponentsEnum);
  let CurrentComponent: string = "";
  let ComponentValue: any;
</script>

<div class="mt-6 text-center font-bold text-2xl underline">Currency Input</div>
<div style='background-color: rgb(186 230 253)' class="bg-white px-6 py-5 border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 relative mt-6 mb-6 mx-auto max-w-6xl max-h-9xl sm:max-h-6xl ">
    <div class="container mx-auto mt-6">
      <div class="flex">
          <div class="py-5 px-1 xl:w-96">
            <select
              class="form-select 
                  p-2.5
                  text-base
                  font-semibold
                  w-80
                  font-normal
                  bg-blue-300 active:shadow-lg active:text-white
                  rounded
                  transition
                  ease-in-out
                  focus:text-gray-700 focus:bg-white focus:border-blue-400 focus:outline-none"
              bind:value={CurrentComponent}
              aria-label="Default select example"
            >
              <option class="block  w-80 font-semibold" value="" selected>SELECT COMPONENTS</option>
              {#each Components as component}
                <option class="block  w-80 font-sans" value={component}>{component}</option>
              {/each}
            </select>
          
          </div>
        </div>
            {#if CurrentComponent === ComponentsEnum.CurrencyInput}
              <div class="grid grid-cols-1 sm:grid-cols-2 pb-1">
                <div class="mb-3 py-2 text-lg">
                  <CurrencyInput
                    bind:value={ComponentValue}
                    customClass="shadow rounded-lg mx-auto w-80 py-2 px-3 ml-1 text-gray-900 leading-tight border-2 border-blue-200"
                  />
                </div>
              </div>
              <div class="mb-3 py-1 px-1 ml-1 rounded  font-semibold text-base text-blue-700">
                Current Value: {ComponentValue == null ? '' : ComponentValue}
              </div> 
            {/if}
      </div>
    </div>