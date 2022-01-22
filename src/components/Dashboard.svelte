<script>
  import List from "./List.svelte";
  export let titleList = [];
</script>

<div class="dashboard">
  {#each titleList as title, index}
    <List bind:title bind:titleList {index} />
  {/each}
</div>

<style>
  .dashboard {
    display: flex;
    align-items: flex-start;
    padding: 10px 10px 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    /* width: 90%; */
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .dashboard::-webkit-scrollbar {
    height: 8px;
  }

  .dashboard::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c6c1e6;
  }
</style>
