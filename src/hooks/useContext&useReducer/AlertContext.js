import { createContext, useReducer, useContext } from "react";

// 1. Создать контекст и деструктурировать Provider:
const AlertContext = createContext();
const { Provider } = AlertContext;

// 2 reducer: Объявляем функцию reducer.
const reducer = (state, action) => {
  switch (action.type) {
    case "show":
      return { ...state, visible: true, message: action.message };
    case "hide":
      return { ...state, visible: false };
    default:
      return state;
  }
};

// 2. Создать компонент контекста:
export const AlertProvider = ({ children }) => {
  // 1 reducer: Объявить редьюсер:
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    message: "Important message!",
  });

  // 3 reducer: cоздаём функции, которые будут вызывать dispatch с необходимым типом action:
  const show = (message) => {
    dispatch({ type: "show", message });
  };

  const hide = () => {
    dispatch({ type: "hide" });
  };

  const toggle = (message) => {
    if (state.visible) {
      dispatch({ type: "hide" });
    } else {
      dispatch({ type: "show", message });
    }
  };

  return (
    <Provider
      value={{
        visible: state.visible,
        message: state.message,
        show,
        hide,
        toggle,
      }}
    >
      {children}
    </Provider>
  );
};

// 3. Сделать из контекста хук:
export const useAlert = () => useContext(AlertContext);
