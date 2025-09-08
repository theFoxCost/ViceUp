<script>
// @ts-nocheck

  import CalendarIcon from "@lucide/svelte/icons/calendar";
  import { DateFormatter, getLocalTimeZone } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { Calendar } from "$lib/components/ui/calendar/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  const df = new DateFormatter("en-US", {
    dateStyle: "long"
  });

  // no types, just normal reactive variables
  let value = undefined;
  let contentRef = null;
</script>

<Popover.Root>
  <Popover.Trigger
    class={cn(
      buttonVariants({
        variant: "outline",
        class: "w-full justify-start text-left font-normal"
      }),
      !value && "text-muted-foreground"
    )}
  >
    <CalendarIcon />
    {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date"}
  </Popover.Trigger>
  <Popover.Content bind:ref={contentRef} class="w-auto p-0">
    <Calendar type="single" bind:value />
  </Popover.Content>
</Popover.Root>
