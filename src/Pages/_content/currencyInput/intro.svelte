<script lang="ts">
</script>

<article class="prose lg:prose-xl">
  <h3>Introduction</h3>
  <div>
    <p>
      In order to create CurrencyInput, we have used <a
        href="https://imask.js.org/guide.html">imask.js</a
      >. "imask" provides lots of function and customization to create your
      desiered masking input but it's only provideds for the JS. Unlike us, if
      you are a TS user then this Component is for you.
    </p>
    <p>
      This component is very simple to use and compitable with Svelte + TS.
      Based on the review and requirement we tried to make it as customizable as
      possible. You can add your custom CSS class or inline CSS style as well.
      You can also add decimal value to it.
    </p>
  </div>
  <h3>How to Use</h3>
  <p>Use following command in order to install the package in your system.</p>
</article>
<div class="mockup-code">
  <pre data-prefix="$" class="language-html"><code
      >npm i svelte-custom-components</code
    ></pre>
</div>
<article class="prose lg:prose-xl">
  <p>
    Once the package is installed, use the below import statement to use the
    currencyInput in your svelte page.
  </p>
</article>

<div class="mockup-code">
  <pre>
        <code>
            &lt;script lang="ts"&gt;
                import CurrencyInput from "svelte-custom-components/CurrencyInput.svelte";
            &lt;/script&gt;

            &lt;div&gt;
                &lt;CurrencyInput value=&lbrace;5&rbrace; /&gt;
             &lt;/div&gt;
        </code>
    </pre>
</div>
<article class="prose lg:prose-xl">
    <p>
        In above code snippet, we have import <code>CurrencyInput</code> from the <code>velte-custom-components</code> npm package. For the demo, we have used one-way binding but you can also use two way binding as well.
    </p>
</article>
