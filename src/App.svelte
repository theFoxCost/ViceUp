<script>
  import "./app.css";
  import WindowFrame from "./components/app/WindowFrame.svelte";
  import Registre from "./components/page/registre.svelte";
  import { ModeWatcher } from "mode-watcher";
</script>

<main>
  <ModeWatcher />
  <WindowFrame />
  <Registre />
</main>

<style>
  
</style>
