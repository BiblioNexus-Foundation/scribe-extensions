import { useCallback, useEffect, useState } from "react";

import _ from "lodash";

const parseOldVersion = <TData>(
  object: Record<string, unknown>,
  initialValues: TData
) => {
  if (Object.keys(object).includes("_isInitial")) {
    return object as { value: TData; _isInitial: boolean };
  }

  return {
    value: object as TData,
    _isInitial: _.isEqual(object, initialValues),
  };
};

// Hook
export default function useLocalStorage<T>({
  key,
  initialValue,
}: {
  key: string;
  initialValue: T;
}) {
  // State to store our value

  // Pass initial state function to useState so logic is only executed once

  const readValue = useCallback(() => {
    {
      if (
        typeof window === "undefined" ||
        key === undefined ||
        key.includes("undefined")
      ) {
        return { value: initialValue, _isInitial: true };
      }
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item
          ? parseOldVersion(JSON.parse(item), initialValue)
          : { value: initialValue, _isInitial: true };
      } catch (error) {
        // If error also return initialValue
        return { value: initialValue, _isInitial: true };
      }
    }
  }, [initialValue, key]);
  const [storedValue, setStoredValue] = useState<T>(() => readValue().value);
  const [isInitial, setIsInitial] = useState<boolean>(true);

  useEffect(() => {
    setStoredValue(readValue().value);
    setIsInitial(readValue()._isInitial);
  }, [key, readValue]);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T) => {
      try {
        // setIsInitial(false);
        // Allow value to be a function so we have same API as useState

        // Save state
        setStoredValue(value);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(
            key,
            JSON.stringify({ value: value, _isInitial: false })
          );
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        // console.log
        console.warn(error);
      }
    },
    [key]
  );

  const clearStorage = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(
      key,
      JSON.stringify({ value: initialValue, _isInitial: true })
    );
    return true;
  }, [initialValue, key]);

  return { storedValue, setValue, clearStorage, isInitial } as const;
}
