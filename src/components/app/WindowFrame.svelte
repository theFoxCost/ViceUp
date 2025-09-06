<script>
  // @ts-nocheck
  import { X, SquareSquare, Minus } from "lucide-svelte";
  
  let RedON = false;
  let bg1 = false;
  let bg2 = false;
  let showTopBar = false;
  
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
  
  // Handle mouse movement to detect hover near top
  function handleMouseMove(event) {
    const mouseY = event.clientY;
    const triggerZone = 50; // Show bar when mouse is within 50px of top
    
    if (mouseY <= triggerZone) {
      showTopBar = true;
    } else if (mouseY > 80) { // Hide when mouse moves further down
      showTopBar = false;
    }
  }
  
  // Keep bar visible when hovering over it
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
      <SquareSquare color={color} size="18" />
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
    transition: background-color 0.2s ease;
  }
  
  .bar {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    width: 100%;
    background-color: #292929;
    transform: translateY(-100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  .bar.visible {
    transform: translateY(0);
  }
  
  /* Optional: Add a subtle gradient fade */
  .bar::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(to bottom, rgba(41, 41, 41, 0.3), transparent);
    pointer-events: none;
  }
  
  main {
        position: relative;
    z-index: 99999;
  }
</style>