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
    height: 140px;
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
    justify-content: space-around;
    height: 30px;
    margin: 10px 0px;
  }

  .tags-wrapper span {
    max-width: 50%;
    padding: 5px 5px 0px;
    border-radius: 5px;
    border: 0.1px solid #f1f1f1;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  button {
    background-image: linear-gradient(-180deg, #abcbf8 0%, #8cb9f8 100%);
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 1rem 1.75rem;
    text-decoration: none;
    width: 100%;
    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    background-image: linear-gradient(-180deg, #abcbf8 0%, #8cb9f8 100%);
  }

  @media (min-width: 768px) {
    button {
      padding: 1rem 2rem;
    }
  }
</style>
