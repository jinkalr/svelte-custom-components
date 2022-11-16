<script lang="ts">
    import CurrencyInput from "$lib/CurrencyInput.svelte";
    let myValue: null | number= null;
</script>

<div>
    <span>$</span>
    <CurrencyInput bind:value={myValue} customStyle=""></CurrencyInput>
</div>
myvalue: {myValue}