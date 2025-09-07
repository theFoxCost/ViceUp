<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import Time from "../app/time.svelte";
  import { Plus } from "lucide-svelte";
  import User from "./user.svelte";
  import data from "../data/data.json";
  import Loading from "../app/loading.svelte";
  
  export let navigateTo;
  let clr = false;
  let loading = true;
  
  onMount(() => {
    // simulate loading of all assets/data
    setTimeout(() => {
      loading = false;
    }, 3000); // 3 seconds for demo
  });
</script>

{#if loading}
  <Loading />
{:else}
  <main class="min-h-screen p-6">
    <div class="flex flex-col">
      <!-- Header with Time -->
      <div class="flex justify-end mb-8">
        <Time />
      </div>
      <!-- Centered grid container for user boxes and add user box -->
      <div class="flex justify-center w-full">
        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
        <div class="users-grid">
          {#each data as user}
            <div class="user">
              <User
                username={user.username}
                PicNum={user.pic}
                nickname={user.nickname}
              />
            </div>
          {/each}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="add-user-box rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-0 cursor-pointer bg-neutral-800 flex flex-col"
            on:mouseover={() => (clr = true)}
            on:mouseleave={() => (clr = false)}
            on:click={() => navigateTo("registre")}
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
{/if}

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