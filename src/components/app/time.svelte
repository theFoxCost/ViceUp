<script>
    import moment from "moment"; 
    import { onMount } from "svelte";
  
    let ctime = moment().format("HH:mm");
  
    onMount(() => {
      setInterval(() => {
        ctime = moment().format("HH:mm");
      }, 1000);
    });
  </script>
  
  <main>
    <h1 class="dark:text-white">{ctime}</h1>
  </main>
  

  