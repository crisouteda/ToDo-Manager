<script>
  export let title;
  export let cardList;
  export let card;
  export let index;
</script>

<div>
  <input value={card.title} />
</div>

<style>
  div {
    height: 50px;
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
  }
</style>
