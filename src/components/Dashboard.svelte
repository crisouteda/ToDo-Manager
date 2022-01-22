<script>
  import List from "./List.svelte";
  import { getTaskStore } from "../stores/tasks";
  let taskPerCategory = getTaskStore();
</script>

<div class="dashboard">
  {#each $taskPerCategory as _, index}
    <List {index} />
  {/each}
  <button
    class="new-list-button"
    on:click={() =>
      ($taskPerCategory = [
        ...$taskPerCategory,
        {
          title: "default",
          tasks: [{ title: "default", description: "default" }],
          tags: [],
        },
      ])}>+ Add a new list</button
  >
</div>

<style>
  .new-list-button {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 0px;
    border-radius: 15px;
    background-color: #c7daf3;
    display: flex;
    flex-direction: column;
    margin: 0px 8px;
    white-space: nowrap;
  }

  .dashboard {
    display: flex;
    margin-top: 4%;
    align-items: flex-start;
    padding: 10px 10px 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .dashboard::-webkit-scrollbar {
    height: 8px;
  }

  .dashboard::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #96bdf0;
  }
</style>
