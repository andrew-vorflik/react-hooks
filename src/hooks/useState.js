import { useState } from "react";

const someCalculations = () => {
  console.log("...some calculations");
  return Math.trunc(Math.random() * 100);
};

function App() {
  // 2. Используем callback в useState для вычисления
  //  начального значения только при первом рендере
  const [count, setCount] = useState(() => someCalculations());
  const [data, setData] = useState({
    title: "Some title",
    date: new Date(),
  });

  // 1. Обращаемся к предыдущему состоянию. Полезно при лечении асинхронности

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // 3. Если в стейте объект необходимо деструктурировать предыдущее состояние при изменении
  const replaceTitle = () => {
    setData((prev) => {
      return { ...prev, title: "New title" };
    });
  };

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={increment} className="btn btn-success">
        Увеличить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Уменьшить
      </button>
      <button onClick={replaceTitle} className="btn btn-warning">
        Изменить объект
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
