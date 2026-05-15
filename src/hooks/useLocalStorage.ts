import { useCallback, useEffect, useState } from 'react';

type SetValue<T> = T | ((prev: T) => T);

function readStorage<T>(key: string, initial: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw == null) return initial;
    return JSON.parse(raw) as T;
  } catch {
    return initial;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValueState] = useState<T>(() =>
    readStorage(key, initialValue),
  );

  const setValue = useCallback((next: SetValue<T>) => {
    setValueState((prev) =>
      typeof next === 'function' ? (next as (p: T) => T)(prev) : next,
    );
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota / private mode */
    }
  }, [key, value]);

  return [value, setValue] as const;
}
