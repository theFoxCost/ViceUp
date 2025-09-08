<script>
  // @ts-nocheck
  import { Button } from "$lib/components/ui/button/index.js";
  import { Save } from "lucide-svelte";
  import { Textarea } from "$lib/components/ui/textarea/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import pic from "../data/logo/React.svg";
  import ColorThief from "colorthief";
  
  let colors = [];
  let dominant = null;
  let imgSrc = pic;
  
  function extractColors() {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgSrc;
    img.onload = () => {
      const colorThief = new ColorThief();
      dominant = colorThief.getColor(img);
      colors = colorThief.getPalette(img, 6);
    };
  }
  extractColors();
  
  // Timer
  let timeLeft = 1;
  let timer = null;
  let isRunning = true;
  let blink = false;
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }
  
  function toggleTimer() {
    if (isRunning) {
      clearInterval(timer);
      isRunning = false;
      return;
    }
    isRunning = true;
    timer = setInterval(() => timeLeft++, 1000);
  }
  
  // Start timer immediately
  timer = setInterval(() => timeLeft++, 1000);
  
  // Blink when paused
  setInterval(() => {
    blink = !isRunning ? !blink : false;
  }, 500);
  
  let techName = "React Framework";
</script>

<main class="p-1">
  <div class="flex flex-row items-center justify-between mx-1.5 mt-0.5">
    <!-- Top colored box (auto-expanding with content) -->
    <div
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, 0.6); border: 1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]});`}
      class="h-10 rounded-md flex items-center gap-2 px-2 min-w-fit max-w-none flex-shrink-0"
    >
      <img class="w-5 h-5 flex-shrink-0" src={pic} alt="logo" />
      <p
        class="font-bold text-white whitespace-nowrap"
        title={techName}
      >
        {techName}
      </p>
    </div>
    
    <!-- Input matching top color -->
    <Input
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, 0.2); color:white; border:1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]})`}
      class="w-full h-10 rounded-md ml-2"
    />
    
    <!-- Timer -->
    <div
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, ${blink ? 0.1 : 0.25}); border:1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]});`}
      class="w-25 h-10 rounded-md mx-2 flex items-center justify-center cursor-pointer transition-colors"
      on:click={toggleTimer}
    >
      <span
        style={`color: rgba(${colors?.[2]?.[0] || 255}, ${colors?.[2]?.[1] || 255}, ${colors?.[2]?.[2] || 255}, 0.8);`}
        class="font-bold transition-colors"
      >
        {formatTime(timeLeft)}
      </span>
    </div>
    
    <Button variant="default">
      <Save />
    </Button>
  </div>
  
  <div class="flex flex-row items-top justify-between h-147 overflow-visible">
    <Textarea
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, 0.15); color:white; border:1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]})`}
      class="w-80 h-196 rounded-md m-2 mx-1"
    />
    <Textarea
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, 0.15); color:white; border:1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]})`}
      class="w-full h-147 rounded-md m-2 mx-1"
    />
  </div>
  
  <div class="flex flex-row items-end justify-end mt-4 mr-1 overflow-visible">
    <Textarea
      style={`background-color: rgba(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]}, 0.15); color:white; border:1px solid rgb(${dominant?.[0]}, ${dominant?.[1]}, ${dominant?.[2]})`}
      class="w-323 h-47 rounded-md mx-0"
    />
  </div>
</main>