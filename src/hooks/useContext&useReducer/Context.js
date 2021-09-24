import Alert from "./Alert";
import Main from "./Main";
import { AlertProvider } from "./AlertContext";

function Context() {
  return (
    // 4. Обернуть приложение в компонент провайдера:
    <AlertProvider>
      <div className="container">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default Context;
