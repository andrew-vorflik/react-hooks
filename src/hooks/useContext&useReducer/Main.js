import { useAlert } from "./AlertContext";

const Main = () => {
  // 5. Использовать глобальные переменные с помощью хука:
  const { toggle } = useAlert();

  return (
    <>
      <h1>Example with context</h1>
      <button
        onClick={() => toggle("Text from toggle")}
        className="btn btn-success"
      >
        Toggle alert
      </button>
    </>
  );
};

export default Main;
