<script>
  import { tick } from "svelte";

  import { getUserStore } from "./../stores/user";
  let user = getUserStore();
  let isSignUp = true;
  let username = "";
  let password = "";

  let error = "";

  $: username || password, (error = "");

  const validate = () => {
    if (username === "") {
      error = "Username can't be empty";
      return;
    }
    if (password === "") {
      error = "password can't be empty";
      return;
    }
    $user = { username };
    tick();
    window.location.reload();
  };
</script>

<div class="modal-wrapper">
  <div class="modal-background" />
  <div class="modal">
    <div class="content">
      <span>User</span>
      <input bind:value={username} />
      <span>Password</span>
      <input type="password" bind:value={password} />
      <div class="error">
        {#if error}
          {error}
        {/if}
      </div>
    </div>
    <div class="button-wrapper">
      <button on:click={validate}>
        {#if isSignUp}
          Sign up
        {:else}
          Sign in
        {/if}
      </button>
      <button
        on:click={() => {
          isSignUp = !isSignUp;
        }}
      >
        {#if isSignUp}
          I have an account
        {:else}
          I don't have an account
        {/if}
      </button>
    </div>
  </div>
</div>

<style>
  .error {
    height: 40px;
    width: 100%;
    text-align: center;
    color: rgb(119, 0, 0);
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

  .content {
    display: flex;
    flex-direction: column;
  }

  .modal-wrapper {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 30;
  }

  .modal-background {
    background: #c7daf3;
    opacity: 0.8;
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
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
