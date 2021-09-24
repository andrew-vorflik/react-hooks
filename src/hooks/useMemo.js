import { useState, useMemo, useEffect } from "react";

const complexCompute = (number) => {
  console.log("complexCompute...");
  let i = 0;

  while (i < 2000000000) i++;

  return number * 2;
};

function App() {
  const [value, setValue] = useState(42);
  const [colored, setColored] = useState(false);

  // 1. Мемоизируем вычисления функции
  const computed = useMemo(() => complexCompute(value), [value]);

  // 2. Мемоизируем объект
  const style = useMemo(
    () => ({
      color: colored ? "tomato" : "black",
    }),
    [colored]
  );

  useEffect(() => {
    console.log("style changed", style);
  }, [style]);

  return (
    <div>
      <h3 style={style}>Current value: {computed}</h3>
      <button
        className="btn btn-success"
        onClick={() => setValue((prev) => prev + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setValue((prev) => prev - 1)}
      >
        Decrease
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change color
      </button>
    </div>
  );
}

export default App;
