<!-- src/Card.svelte -->
<svelte:options customElement="my-card" />

<script>
  export let title = 'Card Title';
  export let content = 'This is a simple card. Add your content here.';
</script>

<style>
  div {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    background-color: white;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }
</style>

<div>
  <h3>{title}</h3>
  <p>{content}</p>
</div>
