import { derived, writable } from 'svelte/store';

const createCount = () => {
  const { subscribe, update, set } = writable(0);

  const increment = (quantityToIncrement: number = 1) => {
    update((currentValue) => currentValue + quantityToIncrement);
  };
  const decrement = () => update((currentValue) => currentValue - 1);
  const reset = () => set(0);

  return {
    subscribe,
    increment,
    decrement,
    reset,
  };
};

export const count = createCount();

// los derived crean como un nuevo estado global parecido al store original, pero con ciertos cambios que nosotros le indiquemos respecto al valor original
export const double = derived(count, ($count) => {
  // if ($count === 20) {
  //   return 'Has llegado al máximo';
  // } else if ($count > 20) {
  //   count.reset();
  // } else {
  //   return 'Aun no has llegado al máximo';
  // }
  return $count * 2;
});
