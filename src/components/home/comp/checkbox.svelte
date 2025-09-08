<script lang="js">
  // @ts-nocheck
  import { SiWhatsapp } from "@icons-pack/svelte-simple-icons";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<div class="flex flex-col gap-6">
  <Label
    class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3
           has-[aria-checked=true]:border-stone-800 has-[aria-checked=true]:bg-stone-800
           dark:has-[aria-checked=true]:border-stone-800 dark:has-[aria-checked=true]:bg-stone-800"
  >
    <Checkbox
      id="toggle-2"
      checked
      class="data-[state=checked]:border-stone-800 data-[state=checked]:bg-stone-800 data-[state=checked]:text-white
             dark:data-[state=checked]:border-stone-800 dark:data-[state=checked]:bg-stone-800"
    />
    <div class="grid gap-1.5 font-normal">
      <div class="flex items-center gap-2">
          <p class="text-sm font-medium leading-none">
              Enable WhatsApp notifications
          </p>
          <SiWhatsapp class="app" />
      </div>
      <p class="text-muted-foreground text-sm">
        You will receive notifications reminding you about this note at the time you set when saving.
      </p>
    </div>
  </Label>
</div>

<style>
    .app {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }
</style>