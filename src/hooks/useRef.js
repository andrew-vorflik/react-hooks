import { useRef, useEffect, useState } from "react";

function App() {
  const renderCount = useRef(0);
  const focusRef = useRef();
  const [value, setValue] = useState("");
  const refPrevValue = useRef("");

  // 3. Получаем предыдущее значение стейта (почему-то)
  useEffect(() => {
    refPrevValue.current = value;
  }, [value]);

  //1. Используем useRef для счёта (сохранении значение вне рендера)
  useEffect(() => {
    renderCount.current++;
  });

  const focused = () => {
    //2. Получаем ссылку на элемент
    focusRef.current.focus();
  };

  return (
    <div>
      <h3>
        Current: {value}, prev: {refPrevValue.current}
      </h3>
      <h3>Render count: {renderCount.current}</h3>
      <input
        type="text"
        ref={focusRef}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={focused} className="btn btn-primary">
        Set focuse
      </button>
    </div>
  );
}

export default App;
