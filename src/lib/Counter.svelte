<script lang="ts">
  import { count, double } from '../store/counterStore';

  const increment = () => {
    // $count += 1
    count.increment(5);
  };

  const reset = () => {
    count.reset();
  };
</script>

<button on:click={increment}>
  count is {$count}
</button>
<h2>El doble de {$count} es: {$double}</h2>

<button type="reset" on:click={reset}> Reset </button>
