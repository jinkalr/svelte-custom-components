<script lang="ts">
	import CurrencyInput from '$lib/CurrencyInput.svelte';
	import { ComponentList } from '../models/ComponentList';

	let currentComponent: string = ComponentList.CurrencyInput;
	const componentAvailable = Object.values(ComponentList);

	let value: any;

	function handleChange(newValue: any) {
		value = newValue.detail;
	}
</script>

<select bind:value={currentComponent}>
	<option selected value="">Select component</option>
	{#each componentAvailable as Component}
		<option value={Component}>{Component}</option>
	{/each}
</select>

<br />

{#if currentComponent === ComponentList.CurrencyInput}
	<CurrencyInput bind:value scale={2} on:change={handleChange} />
	<br />
	Output: {value}
{/if}
