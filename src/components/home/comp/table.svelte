<script lang="js">
// @ts-nocheck
import * as Table from "$lib/components/ui/table/index.js";
import techData from '../../data/learn.json';

// Accept filtered data and hidden columns as props
let { filteredData = techData, hiddenColumns = new Set() } = $props();

// Import all logos dynamically
const modules = import.meta.glob('../../data/logo/*.svg', { eager: true });
// Map file names to their actual imported path
const logosMap = {};
for (const path in modules) {
  const name = path.split('/').pop(); // e.g., "Vue.js.svg"
  logosMap[name] = modules[path].default;
}
</script>

<!-- Table with conditional columns -->
<Table.Root class="w-full">
  <Table.Caption>A list of your technologies.</Table.Caption>
  <Table.Header>
    <Table.Row>
      {#if !hiddenColumns.has('logo')}
        <Table.Head class="w-[100px]">Logo</Table.Head>
      {/if}
      {#if !hiddenColumns.has('name')}
        <Table.Head class="text-lg font-medium">Name</Table.Head>
      {/if}
      {#if !hiddenColumns.has('description')}
        <Table.Head>Description</Table.Head>
      {/if}
      {#if !hiddenColumns.has('time')}
        <Table.Head class="text-right">Time</Table.Head>
      {/if}
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each filteredData as tech}
      <Table.Row>
        <!-- Logo -->
        {#if !hiddenColumns.has('logo')}
          <Table.Cell class="font-medium">
            <img
              src={logosMap[tech.logo]}
              alt={tech.name}
              class="h-5 w-auto"
            />
          </Table.Cell>
        {/if}
        <!-- Name -->
        {#if !hiddenColumns.has('name')}
          <Table.Cell>{tech.name}</Table.Cell>
        {/if}
        <!-- Description -->
        {#if !hiddenColumns.has('description')}
          <Table.Cell class="overflow-x-auto whitespace-nowrap py-1 px-1 cursor-grab select-none">
            {tech.description}
          </Table.Cell>
        {/if}
        <!-- Time -->
        {#if !hiddenColumns.has('time')}
          <Table.Cell class="text-right">{tech.time}</Table.Cell>
        {/if}
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>