<script>
    import Pic1 from "./pic1.jpg";
    let clr = false;
</script>

<main class="flex flex-wrap gap-6"> <!-- container with gap -->
    <div 
        id="cont"
        class="w-35 h-45 rounded-lg shadow-lg duration-0 cursor-pointer flex flex-col relative overflow-hidden mr-[20px]"
        on:mouseover={() => (clr = true)}
        on:mouseleave={() => (clr = false)}
    >
        <!-- Blurred background image -->
        <div 
            class="absolute inset-0 bg-cover bg-center blur-md" 
            style="background-image: url({Pic1});"
        ></div>

        <!-- Dark overlay -->
        <div class="absolute inset-0"></div>

        <!-- Circle with picture -->
        <div class="top relative z-30">
            <div
                class="relative z-30 rounded-full w-20 h-20 border-4 overflow-hidden flex items-center justify-center transition-all duration-0 mt-7"
                style="border-color: rgba(255, 255, 255, {clr ? 1 : 0.5});"
            >
                <img src={Pic1} alt="circle picture" class="w-full h-full object-cover rounded-full" />
            </div>
        </div>

        <!-- Text -->
        <div class="w-full mt-auto px-6 py-3 rounded-b-lg bg-neutral-900 bg-opacity-0 relative z-30 opacity-75">
            <p
                class="text-sm font-medium text-center transition-colors duration-0"
                class:text-neutral-300={!clr}
                class:text-white={clr}
            >
                theFoxCost
            </p>
        </div>
    </div>
</main>

<style>
    .top {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
