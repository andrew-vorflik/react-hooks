import { useAlert } from "./AlertContext";

const Alert = () => {
  // 5. Использовать глобальные переменные с помощью хука:
  const { visible, hide, message } = useAlert();

  console.log("visible", visible);

  if (!visible) return null;

  return (
    <div onClick={hide} className="alert alert-danger mt-3">
      {message}
    </div>
  );
};

export default Alert;
