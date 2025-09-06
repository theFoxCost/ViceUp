<script>
  import Time from "../app/time.svelte";
  import { Plus } from 'lucide-svelte';
  

  export let navigateTo; // receive navigateTo function from App.svelte
  let clr = false;
</script>

<main class="min-h-screen p-6">
  <div class="flex flex-col">
    <!-- Header with Time -->
    <div class="flex justify-end mb-8">
      <Time />
    </div>

    <div class="title mb-4">
      <p class="text-lg font-semibold">Select User</p>
    </div>

    <div class="flex justify-center">
      <div
        class="w-35 h-45 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-neutral-800 flex flex-col"
        on:mouseover={() => (clr = true)}
        on:mouseleave={() => (clr = false)}
        on:click={() => navigateTo('registre')}
      >
        <!-- Inner circle -->
        <div class="flex justify-center mt-10">
          <div
            class="bg-stone-700 rounded-full w-15 h-15 border-2 flex items-center justify-center transition-colors duration-300"
            class:border-neutral-100={clr}
            class:border-neutral-600={!clr}
          >
            <Plus color="#FAF9F6" size={40} />
          </div>
        </div>

        <!-- Label full width at bottom -->
        <div class="w-full mt-auto px-6 py-3 rounded-b-lg bg-neutral-900">
          <p
            class="text-sm font-medium text-center transition-colors duration-300"
            class:text-neutral-300={!clr}
            class:text-white={clr}
          >
            Add User
          </p>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
* {
  font-family: geist;
}
</style>
