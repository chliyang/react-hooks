import { useEffect, useRef, useState } from "react";

function useApp() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef();
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const focusOn = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (inputValue.length > 8) setShowHint(true);
    if (inputValue.length <= 8) setShowHint(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  return {
    count,
    setCount,
    showHint,
    inputValue,
    inputRef,
    handleChange,
    focusOn,
  };
}

export default useApp;
