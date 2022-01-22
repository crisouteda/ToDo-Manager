<script>
  import Modal from "./components/Modal.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import Header from "./components/Header.svelte";
  import Sign from "./components/Sign.svelte";
  import { listIndexStore, cardIndexStore } from "./stores/listIndex";
  import { getUserStore } from "./stores/user";

  let user = getUserStore();
  console.log($user, "ldldlfld");
</script>

<main>
  {#if !$user.username}
    <Sign />
  {/if}
  {#if $listIndexStore !== undefined && $cardIndexStore !== undefined}
    <Modal />
  {/if}
  <Header />
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
