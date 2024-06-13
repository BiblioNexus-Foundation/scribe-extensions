import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const { storedValue: colorMode, setValue: setColorMode } = useLocalStorage({
    key: "color-theme",
    initialValue: "dark",
  });

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return { colorMode, setColorMode };
};

export default useColorMode;
