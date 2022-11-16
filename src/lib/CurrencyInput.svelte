<script lang="ts">
	import { imask } from '@imask/svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	export let label: null | string = null;
	export let value: number | null = null;
	export let max: number = 999999999999999;
	export let min: number = 0;
	export let scale: number = 0;
	export let customStyle: string = '';
	export let customClass: string = '';

	const dispatch = createEventDispatcher();
	let isfocus = false;
	let fvalue: any;
	let commaSelector = /\B(?=(\d{3})+(?!\d))/g;
	let lastCharDotWithZero = /\.{1}0{0,2}$/;
	let firstCharDot = /^0{0,1}\.{1}/;

	$: if (value === null || value === undefined) {
		fvalue = null;
	}

	$: if (value && !lastCharDotWithZero.test(value.toString())) {
		fvalue = value.toString().replace(commaSelector, ',');
	}

	onMount(() => {
		if (value !== null && value > -1) {
			fvalue = value.toString().replace(commaSelector, ',');
		}
	});

	export function validate(detail: any) {
		if (scale > 0) {
			if (
				fvalue?.toString().startsWith('0') &&
				detail.data !== null &&
				!fvalue?.toString().includes('.')
			) {
				value = Number(detail.data);
			}
		} else {
			if (
				value?.toString().startsWith('0') &&
				!value?.toString().includes('.') &&
				detail.data !== '.'
			) {
				value = Number(detail.data);
			}
		}
	}

	const options = {
		mask: Number,
		scale: scale,
		signed: false,
		thousandsSeparator: ',',
		padFractionalZeros: false,
		normalizeZeros: true,
		radix: '.',
		mapToRadix: ['.'],
		max: max,
		min: min,
		commit: (val: string, masked: { _value: string }) => {
			if (!val) {
				val = '';
				masked._value = '';
			}
		}
	};

	function accept({ detail: maskRef }) {
		value =
			scale > 0 ? Number(maskRef.unmaskedValue.toString().replaceAll(',', '')) : maskRef.typedValue;
	}

	function complete({ detail: maskRef }) {
		if (maskRef.unmaskedValue !== '') {
			if (scale > 0) {
				value =
					lastCharDotWithZero.test(fvalue.toString()) || firstCharDot.test(fvalue.toString())
						? fvalue.toString()
						: Number(maskRef.unmaskedValue.toString().replaceAll(',', ''));
			} else {
				value = maskRef.typedValue;
			}
		} else {
			value = null;
		}
		dispatch('change', value);
	}

	function keyUp({ detail: val }) {
		if (val.target.value === '' && value !== null) {
			dispatch('change', null);
		}
	}

	const onBlur = () => {
		if (
			fvalue === null ||
			(lastCharDotWithZero.test(fvalue.toString()) && firstCharDot.test(fvalue.toString())) ||
			Number(fvalue.toString()) < min
		) {
			value = min;
			dispatch('change', value);
		} else if (fvalue !== null && firstCharDot.test(fvalue.toString())) {
			dispatch('change', Number(fvalue.toString()));
		}
		isfocus = false;
	};
	const onFocus = () => {
		isfocus = true;
	};
</script>

<input
	bind:value={fvalue}
	use:imask={options}
	on:accept={accept}
	on:complete={complete}
	on:keyup={keyUp}
	on:input={validate}
	on:blur={onBlur}
	on:focus={onFocus}
	placeholder={label}
	style={customStyle}
	class={customClass}
/>
