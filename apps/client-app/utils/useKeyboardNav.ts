import { useCallback, useState, useEffect } from "react";
export const useKeyboardnav = (size: number) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 40 || e.keyCode === 9) {
        // Down arrow
        e.preventDefault();
        setSelectedIndex(selectedIndex === size - 1 ? 0 : selectedIndex + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setSelectedIndex(selectedIndex === 0 ? size - 1 : selectedIndex - 1);
      }
    },
    [size, selectedIndex, setSelectedIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return {selectedIndex, setSelectedIndex};
}
