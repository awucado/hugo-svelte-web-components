<!-- src/ToggleSwitch.svelte -->
<svelte:options customElement="my-toggle-switch" />

<script>
  export let isOn = false;

  function toggle() {
    isOn = !isOn;
  }
</script>

<style>
  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  .toggle-switch {
    position: relative;
    width: 60px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50px;
    cursor: pointer;
  }

  .toggle-switch::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s ease;
  }

  .toggle-switch.on {
    background-color: #4caf50;
  }

  .toggle-switch.on::before {
    left: 34px;
  }
</style>

<div class="toggle-container" on:click={toggle}>
  <div class="toggle-switch {isOn ? 'on' : ''}"></div>
</div>
