<script>
    import Pic1 from '../data/pictures/pic1.jpg';
    import Pic2 from '../data/pictures/pic2.jpg';
    import Pic3 from '../data/pictures/pic3.jpg';
    import Pic4 from '../data/pictures/pic4.jpg';
    import Pic5 from '../data/pictures/pic5.jpg';
    let PicturesCol = [Pic1, Pic2, Pic3, Pic4, Pic5];
    let clr = false;
    export let username;
    export let PicNum;
</script>

<main class="flex flex-wrap gap-6">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <div
        id="cont"
        class="w-35 h-45 rounded-lg shadow-lg duration-0 cursor-pointer flex flex-col relative overflow-hidden mr-[20px]"
        on:mouseover={() => (clr = true)}
        on:mouseleave={() => (clr = false)}
    >
        <!-- Blurred background image -->
        <div
            class="absolute inset-0 bg-cover bg-center blur-sm"
            style="background-image: url({PicturesCol[PicNum]});"
        ></div>
        <!-- Dark overlay -->
        <div class="absolute inset-0"></div>
        <!-- Circle with picture -->
        <div class="top relative z-30">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <div
                class="relative z-30 rounded-full w-22 h-22 border-4 overflow-hidden flex items-center justify-center transition-all duration-0 mt-6"
                style="border-color: rgba(255, 255, 255, {clr ? 1 : 0.25});"
            >
                <img src={PicturesCol[PicNum]} alt="circle picture" class="w-full h-full object-cover rounded-full" />
            </div>
        </div>
        <!-- Text -->
        <div class="w-full mt-auto px-6 py-3 rounded-b-lg bg-neutral-900 bg-opacity-0 relative z-30 opacity-75">
            <p
                class="text-sm font-medium text-center transition-colors duration-0"
                class:text-neutral-300={!clr}
                class:text-white={clr}
            >
                {username}
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