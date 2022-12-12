<script lang="ts">
	import { imask } from '@imask/svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	export let placeholder: null | string = null;
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

	$: if (value !== null && value > -1 && !lastCharDotWithZero.test(value.toString())) {
		fvalue = value.toString().replace(commaSelector, ',');
	}

	onMount(() => {
		if (value !== null && value > -1) {
			fvalue = value.toString().replace(commaSelector, ',');
		}
	});

	export function validate(detail: { data: string | null }) {
		if (scale > 0) {
			if (
				fvalue?.toString().startsWith('0') &&
				detail.data !== null &&
				!fvalue?.toString().includes('.')
			) {
				value = Number(detail.data);
			} else if (
				fvalue !== null &&
				currencyToNumber(fvalue).split('.')[1] !== undefined &&
				currencyToNumber(fvalue).split('.')[1].length > scale
			) {
				fvalue = numberToCurrency(value);
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
		value = scale > 0 ? Number(currencyToNumber(maskRef.unmaskedValue)) : maskRef.typedValue;
	}

	function complete({ detail: maskRef }) {
		if (maskRef.unmaskedValue !== '') {
			if (scale > 0) {
				value =
					lastCharDotWithZero.test(fvalue.toString()) || firstCharDot.test(fvalue.toString())
						? fvalue.toString()
						: Number(currencyToNumber(maskRef.unmaskedValue));
			} else {
				value = maskRef.typedValue;
			}
		} else {
			value = null;
		}
		dispatch('change', value);
	}

	function keyUp(val: { target: { value: string } }) {
		if (val.target.value === '' && value !== null) {
			value = null;
			dispatch('change', value);
		}
		dispatch('keyup');
	}

	const onBlur = () => {
		if (
			fvalue === null ||
			(lastCharDotWithZero.test(fvalue.toString()) && firstCharDot.test(fvalue.toString())) ||
			Number(fvalue.toString()) < min
		) {
			value = min;
			dispatch('change', value);
		} else if (
			fvalue !== null &&
			(lastCharDotWithZero.test(fvalue.toString()) || firstCharDot.test(fvalue.toString()))
		) {
			dispatch('change', Number(currencyToNumber(fvalue)));
		}
		isfocus = false;
	};

	const onFocus = () => {
		isfocus = true;
	};

	const numberToCurrency = (value) => {
		return value?.toString().replace(commaSelector, ',');
	};

	const currencyToNumber = (value) => {
		return value?.toString().replaceAll(',', '');
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
	{placeholder}
	style={customStyle}
	class={customClass}
/>
