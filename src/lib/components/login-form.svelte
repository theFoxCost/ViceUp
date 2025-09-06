<script>
// @ts-nocheck
  import { onMount } from 'svelte';
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { tooltip } from '$lib/tippy.js';
  import Viceup from "../../components/app/viceup.svelte";
  import Time from '../../components/app/time.svelte';

  let id = Math.random().toString(36).substring(2, 9);
  let loading = true;

  onMount(() => {
    // simulate loading of all assets/data
    setTimeout(() => {
      loading = false;
    }, 2000); // 2 seconds for demo
  });
</script>
{#if loading}
  <!-- Spinner overlay -->
  <div class="absolute w-screen h-screen z-50 flex items-center justify-center bg-stone-950">
    <div class="spinner-border"></div>
  </div>
{:else}
  <!-- Real content -->
  <div class="flex flex-col items-center min-h-screen p-6 w-full relative">
    <div class="absolute top-4 right-4">
        <Time />
    </div>

    <div class="mb-8">
        <Viceup />
    </div>
    
    <Card.Root class="mx-auto w-full max-w-sm bg-neutral-900">
      <Card.Header>
          <Card.Title class="text-2xl">Create an Account</Card.Title>
          <Card.Description>
              Enter your info below to create your account
          </Card.Description>
      </Card.Header>

      <Card.Content>
          <div class="grid gap-4">
              <div class="grid gap-2">
                  <Label for="username-{id}">Username</Label>
                  <Input id="username-{id}" type="text" placeholder="Mohamed" required />
              </div>

              <div class="grid gap-2">
                  <Label for="nickname-{id}">Nickname</Label>
                  <Input id="nickname-{id}" type="text" placeholder="Hot Potato" required />
              </div>

              <div class="grid gap-2">
                  <div class="flex items-center">
                      <Label for="password-{id}">PIN</Label>
                      <span
                          class="ml-auto inline-block text-sm underline dark:text-gray-400 cursor-pointer"
                          use:tooltip={{ content: "Insert 4 Digits" }}
                      >
Info !                      </span>
                  </div>
                  <Input id="password-{id}" type="password" required />
              </div>

              <Button type="submit" class="w-full">Create Account</Button>
          </div>

          <div class="mt-4 text-center text-sm">
              Have an account?
              <a href="##" class="underline"> Sign in </a>
          </div>
      </Card.Content>
    </Card.Root>
  </div>
{/if}
<style>
.spinner-border {
    width: 2rem;
    height: 2rem;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
