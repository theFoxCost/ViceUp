<script>
    // @ts-nocheck
    import pic2 from "../data/pictures/pic5.jpg";
    import { Button } from "$lib/components/ui/button/index.js";
    import Table from './comp/table.svelte'
    import { Input } from "$lib/components/ui/input/index.js";
    import learn from '../data/learn.json';
    import { ClipboardPlus } from "lucide-svelte";
    import Dropdown from './comp/dropdown.svelte'
    import { CirclePlus } from "lucide-svelte";
    import Popbar from "./comp/popbar.svelte";
    
    let searchQuery = '';
    
    // Fix: Use 'learn' instead of 'techData' to match your import
    $: filteredData = learn.filter(tech => {
        const query = searchQuery.toLowerCase();
        return (
            tech.name.toLowerCase().includes(query) ||
            tech.description.toLowerCase().includes(query) ||
            tech.time.toLowerCase().includes(query)
        );
    });
</script>

<main>
    <div class="main">
        <div class="topbar">
            <div class="content">
                <h2 class="font-bold text-2xl mb-1">Welcome back!</h2>
                <p class="text-stone-500">
                    Here's a list of your tasks for this month.
                </p>
            </div>
            <div class="">
                <img class="rounded-full w-13 h-13" src="{pic2}" alt="" />
            </div>
        </div>
        <div class="flex items-center justify-between mt-10">
            <div class="flex flex-row items-center">
                <div class="search">
                    <Input
                        type="text"
                        placeholder="Search Note..."
                        class="max-w-md h-sm"
                        bind:value={searchQuery}
                    />
                </div>
                <div class="ml-2">
                    <button
                        class="p-2 bg-stone-900 flex flex-row justify-between border border-dashed rounded-md items-center h-9 w-22 border-b-neutral-700 hover:bg-stone-800"
                    >
                        <CirclePlus size="18" />
                        <p>Status</p>
                    </button>
                </div>
                <div class="ml-2">
                    <button 
                        class="p-2 bg-stone-900 flex flex-row justify-between border border-dashed rounded-md items-center h-9 w-23 border-b-neutral-700 hover:bg-stone-800"
                    >
                        <CirclePlus size="18" />
                        <p>Priority</p>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-center flex-row">
                <div class="mr-2">
                    <Dropdown />
                </div>
                <div class="new">
                    <Popbar />
                </div>
            </div>
        </div>
        <div class="w-full h-full mt-8">
            <Table {filteredData} />
        </div>
    </div>
</main>

<style>
    main {
        padding: 15px;
    }
    * {
        font-family: geist;
    }
    .topbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>