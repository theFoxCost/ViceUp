<script>
  import moment from "moment"; 
  import { onMount } from "svelte";

  let hours = moment().format("HH");
  let minutes = moment().format("mm");
  let showColon = true;

  onMount(() => {
    setInterval(() => {
      hours = moment().format("HH");
      minutes = moment().format("mm");
      showColon = !showColon; // toggle colon visibility
    }, 1000);
  });
</script>

<main>
  {hours}{showColon ? ":" : " "}{minutes}
</main>
