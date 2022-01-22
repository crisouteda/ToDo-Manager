<script>
  export let index;
  import Card from "./Card.svelte";
  import { getTaskStore } from "../stores/tasks";
  let taskPerCategory = getTaskStore();
</script>

<div class="list">
  <div class="head">
    <input
      bind:value={$taskPerCategory[index].title}
      on:change={(e) => ($taskPerCategory[index].title = e.target.value)}
    />
    <button
      class="remove-button"
      on:click={() => {
        $taskPerCategory = [
          ...$taskPerCategory.slice(0, index),
          ...$taskPerCategory.slice(index + 1),
        ];
        window.location.reload();
      }}>-</button
    >
  </div>
  <div class="cards-wrapper">
    {#each $taskPerCategory[index]?.tasks as _, cardIndex}
      <Card listIndex={index} {cardIndex} />
    {/each}
  </div>
  <button
    class="tail"
    on:click={() => {
      $taskPerCategory[index].tasks = [
        ...$taskPerCategory[index].tasks,
        {
          title: "default",
          description: "default",
          tags: [],
        },
      ];
    }}
  >
    Add card
  </button>
</div>

<style>
  .head {
    display: flex;
    align-items: center;
    padding: 20px 5px;
    border-radius: 15px;
  }
  .head input {
    font-weight: bold;
    text-transform: capitalize;
    margin: 0px;
    padding: 10px;
    width: 100%;
    background-color: transparent;
    border: 0px;
  }

  .head input:focus {
    background: white;
  }

  .tail {
    grid-row: 3;
    font-weight: bold;
    color: #4d4d4d;
    width: 100%;
    padding: 20px 5px;
    border: 0px;
    background: transparent;
    text-align: left;
    border-radius: 15px;
  }

  .head:hover,
  .tail:hover {
    background-color: #abcbf8;
  }

  .cards-wrapper {
    max-height: 90%;
    overflow-x: hidden;
    border-radius: 10px;
  }

  .cards-wrapper::-webkit-scrollbar {
    width: 8px;
  }

  .cards-wrapper::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #96bdf0;
  }

  .list {
    max-height: 100%;
    border-radius: 15px;
    background-color: #c7daf3;
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 0px 8px;
  }

  .remove-button {
    background: red;
    border: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0px;
  }
</style>
