import { useEffect, useRef, useState } from "react";

let externalRenderCount = 0

export const RefExamplePage = () => {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    count.current = count.current + 1;
    externalRenderCount++
  });

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <h1>External Render Count: {externalRenderCount}</h1>
      <button onClick={() => console.log('inputRef value', inputRef.current?.value)}>Read input value</button>
    </>
  );

}