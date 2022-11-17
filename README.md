# svelte-custom-components
This is library for Vanilla Svelte custom components with TS. Which Making your task easy to implement. 

# How to use

**How to install**

`npm install svelte-custom-components`

**How to use**

`import {<ComponentName>} from 'svelte-custom-components/<ComponentName>.svelte'`

`<ComponentName/>`

<br/>

# List of Components

<details><summary><b style='font-size:22px'>1. Currency Input</b></summary>

<div style='padding-left:50px'>

<br/>

### **__Variables accepts__**

<br/>

1.1. `placeholder`

>**Information**: _To show the tex as place holder_

>**Datatype**: _null | string_

>**Default value**: _null_

<br/>

1.2. `value`

>**Information**: _Actual value of element_

>**Datatype**: _null | number_

>**Default value**: _null_

<br/>

1.3. `max`

>**Information**: _Maximum number can be accepted_

>**Datatype**:  _number_

>**Default value**: _999999999999999_

<br/>

1.4. `min`

>**Information**: Minimum number can be accepted_

>**Datatype**:  _number_

>**Default value**: _0_

<br/>

1.5. `scale`

>**Information**: _Count to decimal values it can accept_

>**Datatype**:  _number_

>**Default value**: _0_

<br/>

1.6. `customStyle`

>**Information**: _Apply your custom css directly to the element_

>**Datatype**:  _string_

>**Default value**: _''_

<br/>

1.7. `customClass`

>**Information**: _Apply your custom class directly to the element_

>**Datatype**:  _string_

>**Default value**: _''_

<br/>

### **Dispatch methods**

- `change`

>Returns new updated value of "`Value`"

<br/>
</div>
</details>

<br/>

# Credits

This library uses [IMask](https://github.com/uNmAnNeR/imaskjs) for all of its components. IMask provides masking for various programing languages.