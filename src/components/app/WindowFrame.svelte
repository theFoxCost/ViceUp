<script>
  // @ts-nocheck
  import { X, SquareSquare, Minus } from "lucide-svelte";
  let RedON = false;
  let bg1 = false;
  let bg2 = false;
  let showTopBar = false;
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
  // Show bar when mouse is near top
  function handleMouseMove(event) {
    const mouseY = event.clientY;
    const triggerZone = 50;
    if (mouseY <= triggerZone) {
      showTopBar = true;
    } else if (mouseY > 80) {
      showTopBar = false;
    }
  }
  function handleBarEnter() {
    showTopBar = true;
  }
  function handleBarLeave() {
    showTopBar = false;
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<main>
  <div
    class="bar"
    class:visible={showTopBar}
    on:mouseenter={handleBarEnter}
    on:mouseleave={handleBarLeave}
  >
    <div class="button-card">
      <div
        class="minimize"
        style="background-color: {bgcolor2}"
        on:click={stMinimize}
        on:mouseover={() => (bg2 = true)}
        on:mouseleave={() => (bg2 = false)}
      >
        <Minus color={color} size="14" />
      </div>
      <div
        class="resize"
        style="background-color: {bgcolor1}"
        on:click={stResize}
        on:mouseover={() => (bg1 = true)}
        on:mouseleave={() => (bg1 = false)}
      >
        <SquareSquare color={color} size="14" />
      </div>
      <div
        class="close"
        style="background-color: {bgcolor}"
        on:click={stClose}
        on:mouseover={() => (RedON = true)}
        on:mouseleave={() => (RedON = false)}
      >
        <X color={color} size="14" />
      </div>
    </div>
  </div>
</main>

<style>
  main {
    position: relative;
    z-index: 99999;
  }
  .bar {
    position: fixed;
    top: 8px;
    left: 50%;
    transform: translate(-50%, -150%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
  .bar.visible {
    transform: translate(-50%, 0);
  }
  .button-card {
    display: flex;
    gap: 6px;
    background: rgba(28, 28, 28, 0.9);
    padding: 6px 8px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    transition: background-color 0.2s ease;
  }
  .minimize,
  .resize,
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
</style>