<!-- src/Alert.svelte -->
<svelte:options customElement="my-alert" />

<script>
  export let type = 'success'; // 'success', 'error', 'info', 'warning'
  export let message = 'This is an alert message!';
</script>

<style>
  .alert {
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    margin: 20px 0;
  }

  .alert.success {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
  }

  .alert.error {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
  }

  .alert.info {
    background-color: #d1ecf1;
    border: 1px solid #bee5eb;
    color: #0c5460;
  }

  .alert.warning {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    color: #856404;
  }
</style>

<div class="alert {type}">
  {message}
</div>
