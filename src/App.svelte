<script>
  import Dashboard from "./components/Dashboard.svelte";
  import Modal from "./components/Modal.svelte";
  let titleList = ["default"];
</script>

<main>
  <!-- <Modal/> -->

  <Dashboard {titleList} />
  <button on:click={() => (titleList = [...titleList, "default"])}>+</button>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    background: #e2e8f0;
  }

  button {
    background: #0bda51;
    border: 0px;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    margin: 35px 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #fff;
  }
</style>
