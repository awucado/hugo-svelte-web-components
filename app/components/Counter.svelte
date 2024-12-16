<!-- src/Counter.svelte -->
<svelte:options customElement="my-component" />

<script>
  let count = 0;

  // Method to increment the counter
  function increment() {
    count += 1;
  }

  // Method to decrement the counter
  function decrement() {
    count -= 1;
  }
</script>

<style>
  /* Container styling */
  div {
    text-align: center;
    font-size: 24px;
    margin: 20px;
    padding: 20px;
    background-color: #f3f3f3; /* Light background for contrast */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    max-width: 300px;
    margin: 50px auto;
  }

  /* Heading style */
  h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }

  /* Button styling */
  button {
    padding: 15px 30px;
    font-size: 20px;
    margin: 10px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  button:hover {
    background-color: #ff6f61; /* Color change on hover */
    transform: scale(1.1); /* Slight scaling effect */
  }

  button:active {
    background-color: #ff3b2f; /* Darker shade when clicked */
  }

  /* Button colors for increment and decrement */
  button.increment {
    background-color: #4caf50; /* Green for increment */
    color: white;
  }

  button.decrement {
    background-color: #f44336; /* Red for decrement */
    color: white;
  }
</style>

<div>
  <h2>Counter: {count}</h2>
  <button class="decrement" on:click={decrement}>-</button>
  <button class="increment" on:click={increment}>+</button>
</div>
