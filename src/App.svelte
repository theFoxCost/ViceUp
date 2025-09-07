<script>
// @ts-nocheck
  import "./app.css";
  import WindowFrame from "./components/app/WindowFrame.svelte";
  import Pin from "./components/page/pin.svelte";
  import Registre from "./components/page/registre.svelte";
  import Main from "./components/home/main.svelte";
  import { ModeWatcher } from "mode-watcher";
  import Router from 'svelte-spa-router'
  let page = 'pin'; // current page
  function navigateTo(target) {
    page = target;
  }
</script>
<main>
  <ModeWatcher />
  <WindowFrame />
  <Main />
</main>
<style>
  main {
    font-family: geist;
  }
</style>