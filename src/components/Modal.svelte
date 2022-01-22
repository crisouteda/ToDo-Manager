<script>
  import { getTaskStore } from "../stores/tasks";
  import { listIndexStore, cardIndexStore } from "../stores/listIndex";

  let taskPerCategory = getTaskStore();
</script>

<div class="modal-wrapper">
  <div
    class="modal-background"
    on:click={() => {
      $listIndexStore = undefined;
      $cardIndexStore = undefined;
      window.location.reload();
    }}
  />
  <div class="modal">
    <button
      class="close"
      on:click={() => {
        $listIndexStore = undefined;
        $cardIndexStore = undefined;
        window.location.reload();
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
          window.location.reload();
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

  .close {
    position: absolute;
    top: 0px;
    right: 0px;
    margin-right: -30px;
    margin-top: -30px;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    padding: 10px 0px 0px;
    border: 1px solid gray;
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
