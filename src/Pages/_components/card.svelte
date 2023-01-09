<div class="card border shadow-[1px_1px_10px_1px_rgba(0,0,0,0.12)]">
    <div class="card-body p-4">
      {#if $$slots.title}
        <div class="card-title">
          <slot name="title" />
        </div>
      {/if}
      {#if $$slots.subtitle}
        <div>
          <slot name="subtitle" />
        </div>
      {/if}
      {#if $$slots.body}
        <div><slot name="body" /></div>
      {/if}
      {#if $$slots.footer}
        <div class="card-actions">
          <slot name="footer" />
        </div>
      {/if}
    </div>
  </div>
  