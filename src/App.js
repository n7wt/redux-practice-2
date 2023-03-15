import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Reset from "./Reset.jsx";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state);

  const increase = () => {
    dispatch({
      type: "Increase",
      payload: 5,
    });
  };

  const decrease = () => {
    dispatch({
      type: "Decrease",
    });
  };

  return (
    <div className="App">
      <p className="counter">{counter}</p>

      <div className="buttons">
        <div className="plus-minus">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
        <Reset />
      </div>
    </div>
  );
}

export default App;
