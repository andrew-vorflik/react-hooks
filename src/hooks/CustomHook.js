import { useState } from "react";

// Хуки это функции, которые используют хуки вне реакт компонентов
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (value) => {
    setValue(value.target.value);
  };

  const clear = () => setValue("");

  return {
    input: {
      value,
      onChange,
    },
    value,
    clear,
  };
}

function CustomHook() {
  const firstName = useInput("");
  const lastName = useInput("");

  return (
    <div>
      <input type="text" {...firstName.input} />
      <input type="text" {...lastName.input} />
      <h3>
        {firstName.value} {lastName.value}
      </h3>
    </div>
  );
}

export default CustomHook;
