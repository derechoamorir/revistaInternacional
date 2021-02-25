import { writable } from 'svelte/store';

export const result = writable([]) //
export const usedCountries = writable([]);
export const newUpdate = writable(false);
export const resetSession = writable(false);