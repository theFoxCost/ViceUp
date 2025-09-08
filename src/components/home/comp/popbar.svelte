<script lang="js">
  // @ts-nocheck

  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { buttonVariants } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { BookPlus, ImagePlus } from "lucide-svelte";
  import Date from "./date.svelte";
  import Checkbox from "./checkbox.svelte";
</script>

<Sheet.Root>
  <Sheet.Trigger class={buttonVariants({ variant: "default" })}>
    <BookPlus />
    New Note
  </Sheet.Trigger>
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>Edit new note</Sheet.Title>
      <Sheet.Description>
        Make changes to your new note here. Click save when you're done.
      </Sheet.Description>
    </Sheet.Header>

    <div class="grid flex-1 auto-rows-min gap-6 px-4">
      <!-- Name -->
      <div class="grid gap-3">
        <Label for="name" class="text-right">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>

      <!-- Username -->
      <div class="grid gap-3">
        <Label for="username" class="text-right">Username</Label>
        <Input id="username" placeholder="Enter your username" />
      </div>

      <!-- Description -->
      <div class="grid gap-3">
        <Label for="description" class="text-right">Description</Label>
        <Input id="description" placeholder="Write a short description 24 word" />
      </div>



      <div class="grid gap-3">
        <Label for="Date" class="text-right">Date</Label>
        <Date />
      </div>

      <!-- Picture Upload -->
      <div class="grid gap-3">
        <Label for="picture">Picture</Label>
        <div class="relative w-full max-w-sm">
          <Input id="picture" type="file" class="pr-10" />
          <ImagePlus
            size="18"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none"
          />
        </div>
      </div>
        <div class="grid gap-3">
        <Label for="description" class="text-right">Description</Label>
        <Checkbox />
      </div>
    </div>

    <Sheet.Footer>
      <Sheet.Close class={buttonVariants({ variant: "outline" })}>
        Save changes
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
