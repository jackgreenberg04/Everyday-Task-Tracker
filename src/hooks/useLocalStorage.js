import { useState, useEffect } from 'react';

/**
 * A small hook that syncs a state value with localStorage.
 * @param {string} key The key in localStorage.
 * @param {any} initialValue Value to use when nothing is stored yet.
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error('Failed to read localStorage', err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

