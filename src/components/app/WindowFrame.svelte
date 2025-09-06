<script>
  // @ts-nocheck
  import { X, Minimize2, Minus } from "lucide-svelte";

  let RedON = false;
  let bg1 = false;
  let bg2 = false;

  // Reactive background colors
  $: bgcolor = RedON ? "red" : "#292929";
  $: bgcolor1 = bg1 ? "#ffffff50" : "#292929";
  $: bgcolor2 = bg2 ? "#ffffff50" : "#292929";

  let color = "white";

  function stClose() {
    window.electronAPI.close();
    console.log("Window closed");
  }

  async function stResize() {
    const isMax = await window.electronAPI.isMaximized();
    if (isMax) {
      window.electronAPI.unmaximize();
      console.log("Window unmaximized");
    } else {
      window.electronAPI.maximize();
      console.log("Window maximized");
    }
  }
  

  function stMinimize() {
    window.electronAPI.minimize();
    console.log("Window minimized");
  }
</script>

<main>
  <div class="bar">
    <div
      class="minimize"
      style="background-color: {bgcolor2}"
      on:click={stMinimize}
      on:mouseover={() => (bg2 = true)}
      on:mouseleave={() => (bg2 = false)}
    >
      <Minus color={color} size="18" />
    </div>

    <div
      class="resize"
      style="background-color: {bgcolor1}"
      on:click={stResize}
      on:mouseover={() => (bg1 = true)}
      on:mouseleave={() => (bg1 = false)}
    >
      <Minimize2 color={color} size="18" />
    </div>

    <div
      class="close"
      style="background-color: {bgcolor}"
      on:click={stClose}
      on:mouseover={() => (RedON = true)}
      on:mouseleave={() => (RedON = false)}
    >
      <X color={color} size="18" />
    </div>
  </div>
</main>

<style>
  .minimize,
  .resize,
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    width: 100%;
    background-color: #292929;
  }
</style>
