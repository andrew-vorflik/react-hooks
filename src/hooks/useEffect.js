import { useState, useEffect } from "react";

const MouseMover = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const container = document.querySelector(".mouse-mover");

    const showCoords = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    container.addEventListener("mousemove", showCoords);

    console.log("event listener", container.addEventListener);

    return () => {
      console.log("remove", container.addEventListener);

      return container.removeEventListener("mousemove", showCoords);
    };
  }, []);

  return (
    <div className="mouse-mover">
      <pre>{JSON.stringify(coords, null, 2)}</pre>
    </div>
  );
};

function App() {
  const [status, setStatus] = useState("users");
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("render component");
  });

  return (
    <div>
      <h1>Status: {status}</h1>
      <button className="btn btn-primary" onClick={() => setStatus("users")}>
        Users
      </button>
      <button className="btn btn-primary" onClick={() => setStatus("todos")}>
        Todos
      </button>
      <button className="btn btn-primary" onClick={() => setStatus("posts")}>
        Posts
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setVisible((prev) => !prev)}
      >
        Delete mouse mover
      </button>
      {isVisible && <MouseMover />}
    </div>
  );
}

export default App;
