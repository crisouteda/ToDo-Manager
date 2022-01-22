<script>
  import { getUserStore } from "./../stores/user";
  let user = getUserStore();
</script>

<div>
  <button
    on:click={() => {
      $user = { username: undefined };
      window.location.reload();
    }}>Sign Out</button
  >
</div>

<style>
  div {
    position: fixed;
    height: 8%;
    background: #8cb9f8;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
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

    border: 0;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    background-image: linear-gradient(-180deg, #abcbf8 0%, #8cb9f8 100%);
  }
</style>
