<script lang="ts">
  import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

  let ComponentValue: any;
</script>
<h3>CurrencyInput</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 pb-1">
  <div class="mb-3 py-2 text-lg">
    <CurrencyInput
      bind:value={ComponentValue}
    />
  </div>
</div>
<div class="mb-3 py-1 px-1 ml-1 rounded  font-semibold text-base text-blue-700">
  Current Value: {ComponentValue == null ? '' : ComponentValue}
</div> 