<script>
  import { getTaskStore } from "../stores/tasks";
  import { listIndexStore, cardIndexStore } from "../stores/listIndex";

  let taskPerCategory = getTaskStore();
</script>

<div class="modal-wrapper">
  <div class="modal-background" />
  <div class="modal">
    <button
      class="close"
      on:click={() => {
        $listIndexStore = undefined;
        $cardIndexStore = undefined;
      }}>X</button
    >
    <div class="content">
      <input
        value={$taskPerCategory[$listIndexStore]?.tasks[$cardIndexStore].title}
        on:change={(e) => {
          $taskPerCategory[$listIndexStore].tasks[$cardIndexStore].title =
            e.target.value;
        }}
      />
      <span on:c>Description</span>
      <textarea
        value={$taskPerCategory[$listIndexStore]?.tasks[$cardIndexStore]
          ?.description}
        on:change={(e) => {
          $taskPerCategory[$listIndexStore].tasks[$cardIndexStore].description =
            e.target.value;
        }}
      />
    </div>
    <div class="edit">
      <button
        class="remove"
        on:click={() => {
          let i1 = $listIndexStore;
          let i2 = $cardIndexStore;
          let cris = $taskPerCategory;
          $cardIndexStore = undefined;
          $listIndexStore = undefined;
          cris[i1].tasks = [
            ...$taskPerCategory[i1].tasks.slice(0, i2),
            ...$taskPerCategory[i1].tasks.slice(i2 + 1),
          ];
          $taskPerCategory = cris;
        }}>Remove</button
      >
      <div class="tags-list">
        {#each $taskPerCategory[$listIndexStore]?.tasks[$cardIndexStore]?.tags as tag, i}
          <input
            value={tag}
            on:change={(e) => {
              $taskPerCategory[$listIndexStore].tasks[$cardIndexStore].tags[i] =
                e.target.value;
            }}
          />
        {/each}
        <button
          on:click={() => {
            $taskPerCategory[$listIndexStore].tasks[$cardIndexStore].tags = [
              ...$taskPerCategory[$listIndexStore].tasks[$cardIndexStore].tags,
              "default",
            ];
          }}>Add tag</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  .close {
    position: absolute;
    top: 0px;
    right: 0px;
    margin-right: -30px;
    margin-top: -30px;
    border-radius: 20px;
    width: 35px;
    height: 35px;
  }
  .tags-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .tags-list input {
    text-transform: capitalize;
  }

  .modal-wrapper {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 30;
  }

  .modal-background {
    background: #c7daf3;
    opacity: 0.1;
    width: 100%;
    height: 100%;
  }

  .modal {
    top: 5%;
    left: 20%;
    height: 80%;
    width: 60%;
    position: absolute;
    z-index: 10;
    background: white;
    border-radius: 15px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (max-width: 800px) {
    .modal {
      width: 80%;
      left: 10%;
    }
  }

  .content {
    min-width: 60%;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }

  .content input {
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
    border: 0px;
    padding: 20px 0px;
  }

  .content span {
    font-weight: bold;
    margin-left: 20px;
    margin: 10px 0px 20px;
  }

  .content textarea {
    height: 50%;
    width: 100%;
  }

  .edit {
    margin: 20px;
    width: 150px;
    display: flex;
    flex-direction: column;
  }

  .remove {
    background: rgb(184, 35, 35);
    color: white;
    border: 0px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
  }
</style>
