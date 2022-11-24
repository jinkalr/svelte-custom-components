<script lang="ts">
	import CurrencyInput from '$lib/CurrencyInput.svelte';
	import { ComponentList } from '../models/ComponentList';

	let currentComponent: null | string = "";

	let value:any;

</script>

<select bind:value={currentComponent}>
	<option selected value="">Select component</option>
	<option value={ComponentList.CurrencyInput}>Currency input</option>
</select>

<br />
<br />

{#if currentComponent === ComponentList.CurrencyInput}
	<CurrencyInput bind:value/>
{/if}
