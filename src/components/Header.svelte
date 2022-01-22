<script>
  import { getUserStore } from "./../stores/user";
  let user = getUserStore();
</script>

<div>
  <span class="title-wrapper">
    <svg
      class="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <g
        fill="none"
        stroke="#FFD700"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          d="M11 7.5a5 5 0 11-10 0 5 5 0 0110 0zm0 0M11 25a5 5 0 11-10 0 5 5 0 0110 0zm0 0M11 43a5 5 0 11-10 0 5 5 0 0110 0zm0 0M19 25h30.016M19 43h30.016M19 7.5h30.016"
        />
      </g>
    </svg>
    <span class="title">Nuwello</span></span
  >
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
    height: 6%;
    background: #8cb9f8;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: transparent;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 0px 5px;
    padding: 1rem 1.75rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    font-size: 16px;
    justify-content: center;
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

  .icon {
    transform: scale(0.7);
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin: 0px 10px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #000000;
    border-radius: 15px;
  }
</style>
