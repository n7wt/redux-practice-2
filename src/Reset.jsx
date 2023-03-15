import { useDispatch } from "react-redux";
import "./App.css";

function Reset() {
  const dispatch = useDispatch();

  const reset = () => {
    dispatch({
      type: "Reset",
    });
  };

  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Reset;
