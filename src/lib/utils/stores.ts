import { writable } from 'svelte/store';
import { slide } from 'svelte/transition';

export const images = writable([]);
export const width = writable(0);
export const height = writable(0);
export const frame_rate = writable(0);
export const backgroundColor = writable('');
export const iconColor = writable('');
export const borderColor = writable('');
export const borderRadius = writable(false);

export const displayerAnimation = writable((node: Element, options?: any) => {
  options = options || {};
  return slide(node, options);
});
