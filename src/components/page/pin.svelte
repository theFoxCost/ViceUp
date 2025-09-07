<script>
  import Time from "../app/time.svelte";
  import { Plus } from 'lucide-svelte';
  import User from "./user.svelte";
  export let navigateTo;
  let clr = false;
</script>

<main class="min-h-screen p-6">
  <div class="flex flex-col">
    <!-- Header with Time -->
    <div class="flex justify-end mb-8">
      <Time />
    </div>
    
    <!-- Centered grid container for user boxes and add user box -->
    <div class="flex justify-center w-full">
      <div class="users-grid">
        <div class="user"><User /></div>
        <div class="user"><User /></div>
        <div class="user"><User /></div>
        <div class="user"><User /></div>
        <div class="user"><User /></div>
        <div class="user"><User /></div>
        <div
          class="add-user-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-0 cursor-pointer bg-neutral-800 flex flex-col"
          on:mouseover={() => (clr = true)}
          on:mouseleave={() => (clr = false)}
          on:click={() => navigateTo('registre')}
        >
          <!-- Inner circle -->
          <div class="flex justify-center mt-10">
            <div
              class="bg-stone-700 rounded-full w-15 h-15 border-2 flex items-center justify-center transition-colors duration-0"
              class:border-neutral-100={clr}
              class:border-neutral-600={!clr}
            >
              <Plus color="#FAF9F6" size={40} />
            </div>
          </div>
          <!-- Label full width at bottom -->
          <div class="w-full mt-auto px-6 py-3 rounded-b-lg bg-neutral-900">
            <p
              class="text-sm font-medium text-center transition-colors duration-0"
              class:text-neutral-300={!clr}
              class:text-white={clr}
            >
              Add User
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  * {
    font-family: geist;
  }
  
  .users-grid {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  
  .add-user-box {
    width: 140px;
    height: 180px;
  }
  
  .w-15 {
    width: 60px;
  }
  
  .h-15 {
    height: 60px;
  }
</style>