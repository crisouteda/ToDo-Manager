<script>
  export let title;
  export let titleList;
  export let index;
  import Card from "./Card.svelte";

  let cardList = [
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
    {
      title: "default",
      description: "add your description here",
    },
  ];
</script>

<div class="list">
  <div class="head">
    <input
      bind:value={title}
      on:change={(e) => (titleList[index] = e.target.value)}
    />
    <button
      class="remove-button"
      on:click={() => {
        titleList.splice(index, 1);
        titleList = titleList;
      }}>-</button
    >
  </div>
  <div class="cards-wrapper">
    {#each cardList as card, index}
      <Card bind:title bind:cardList bind:card {index} />
    {/each}
  </div>
  <button
    class="tail"
    on:click={() => {
      cardList = [
        ...cardList,
        {
          title: "default",
          description: "add your description here",
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
  }

  .head input {
    font-weight: bold;
    text-transform: capitalize;
    padding: 0px;
    margin: 0px;
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
    background-color: #c6c1e6;
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

  input {
    width: 100%;
    background-color: transparent;
    border: 0px;
  }

  .remove-button {
    background: red;
    border: 0px;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #fff;
    margin: 0px;
  }
</style>
