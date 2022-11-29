# Svelte Custom Components

This is library for Vanilla Svelte custom components with TS. Which Making your task easy to implement. 

```
<script>

    import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

</script>

<CurrencyInput value={0} />

```

<br/>

# Installation 

This module is for Svelte project only. 

Before installing this, make sure your project is ready to run.

Install this module using following command.

```
$ npm i svelte-custom-components
```

<br/>

# Features

- Ready to use components
- Supports 2-way binding
- Fully customizable components

<br/>

# Components

1. <a href="#CurrencyInput"> CurrencyInput </a>

<br/>

<div id="CurrencyInput">

<hr/>

## CurrencyInput

- Currency input is component for currency value.
- It will only accept Numeric value and also supports Decimal

<br/>

> Variables Accepted

<table >
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                value
            </td>
            <td>
                nullable | number
            </td>
            <td>
                0
            </td>
        </tr>
        <tr>
            <td>
                placeholder
            </td>
            <td>
                nullable | string
            </td>
            <td>
                null
            </td>
        </tr>
        <tr>
            <td>
                max
            </td>
            <td>
                number
            </td>
            <td>
                999999999999999
            </td>
        </tr>
        <tr>
            <td>
                min
            </td>
            <td>
                number
            </td>
            <td>
                0
            </td>
        </tr>
        <tr>
            <td>
                scale
            </td>
            <td>
                number
            </td>
            <td>
                0
            </td>
        </tr>
        <tr>
            <td>
                customStyle
            </td>
            <td>
                string
            </td>
            <td>
                ''
            </td>
        </tr>
        <tr>
            <td>
                customClass
            </td>
            <td>
                string
            </td>
            <td>
                ''
            </td>
        </tr>
    </tbody>
</table>

<br/>

> Methods Dispatch


<table >
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Return data </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                change
            </td>
            <td>
                nullable | number
            </td>
            <td>
                Updated value of CurrencyInput
            </td>
        </tr> 
        <tr>
        <td colspan=3>Please do handle this above Dispatch if you are using Scale > 0.</td>
        </tr>       
    </tbody>
</table>

> Example

<br/>

- Simple Currency Input demo

```
<script>
    import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

    let myValue = 0;
    let placeholder = "Enter currency here.";

</script>

<CurrencyInput bind:value={myValue} placeholder={placeholder}></CurrencyInput>
<br/>
myValue = {myValue}

```

<br/>

- Advance Currency Input demo

```
<script>
    import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";

    let value = 0;
    let placeholder = "Enter currency here.";
    let scale = 2;
    let min = 0;
    let max = 1000000;

    function handleChange(newValue:any)
    {
        value = newValue.detail
    }
    
</script>

<CurrencyInput bind:value {placeholder} {scale} {min} {max} on:change={handleChange}></CurrencyInput>
<br/>
value = {value}

```

</div>