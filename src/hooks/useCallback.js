import { useState, useEffect, useCallback } from "react";

export const RenderItems = ({ getItems }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    console.log("render item");
    const newItems = getItems(42);

    setItems(newItems);
  }, [getItems]);

  return (
    <ul>{items && items.map((element) => <li key={element}>{element}</li>)}</ul>
  );
};

function App() {
  const [value, setValue] = useState(0);
  const [colored, setColored] = useState(false);

  const style = {
    color: colored ? "tomato" : "black",
  };

  // 1. Используем для мемоизации колбека при ререндере компонента
  const createNewItems = useCallback(
    // Можно передать параметр т.к. возвращается сам  коллбек
    (start) => {
      return new Array(value)
        .fill("")
        .map((_, index) => `Элемент ${index + start}`);
    },
    [value]
  );

  return (
    <div>
      <h1 style={style}>Count: {value}</h1>
      <button
        className="btn btn-success"
        onClick={() => setValue((prev) => prev + 1)}
      >
        Увеличить
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить цвет
      </button>
      <RenderItems getItems={createNewItems} />
    </div>
  );
}

export default App;
