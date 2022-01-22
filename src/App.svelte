<script>
  import Modal from "./components/Modal.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import { listIndexStore, cardIndexStore } from "./stores/listIndex";
  $: console.log($listIndexStore, $cardIndexStore);
</script>

<main>
  {#if $listIndexStore !== undefined && $cardIndexStore !== undefined}
    <Modal />
  {/if}
  <Dashboard />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    background: #e2e8f0;
  }
</style>
