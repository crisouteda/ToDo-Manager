<script>
  export let listIndex;
  export let cardIndex;
  import { getTaskStore } from "../stores/tasks";
  import { listIndexStore, cardIndexStore } from "../stores/listIndex";
  let taskPerCategory = getTaskStore();
</script>

<div>
  <input
    value={$taskPerCategory[listIndex].tasks[cardIndex].title}
    on:change={(e) => {
      $taskPerCategory[listIndex].tasks[cardIndex].title = e.target.value;
    }}
    on:click={(e) => e.stopPropagation()}
  />
  <span class="tags-wrapper">
    {#if $taskPerCategory[listIndex].tasks[cardIndex].tags}
      {#each $taskPerCategory[listIndex]?.tasks[cardIndex]?.tags?.slice(0, 2) as tag}
        <span>{tag}</span>
      {/each}
    {/if}
  </span>
  <button
    on:click={() => {
      $listIndexStore = listIndex;
      $cardIndexStore = cardIndex;
    }}
  >
    See more
  </button>
</div>

<style>
  div {
    height: 120px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  input {
    border: 0px;
    text-transform: capitalize;
  }

  .tags-wrapper {
    display: flex;
    flex-direction: row;
    height: 30px;
  }

  .tags-wrapper span {
    max-width: 50%;
    padding: 5px 5px 0px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
</style>
