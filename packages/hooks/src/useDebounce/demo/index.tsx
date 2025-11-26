import React, { useState } from "react";
import { useDebounce } from "zxreact-hooks";

export default function Demo() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>Current Value: {value}</p>
      <p style={{ marginTop: 16 }}>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

