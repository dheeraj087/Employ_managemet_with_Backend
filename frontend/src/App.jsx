import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import Form from "./Form";
import Navbare from "./compnent/navbare";
import { useEffect } from "react";
import { getData } from "./reduxtoolkit/fetcher/employReduser";

function App() {
  const state = useSelector((state) => state.employ);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (state.lodding) {
    console.log("tyrjefghskohgf");

    return (
      <h1 className="text-2xl w-49 font-bold bg-linear-to-r from-red-50 to-pink-700 bg-clip-text text-transparent">
        loding is true................................................
      </h1>
    );
  }
  return (
    <div>
      <Navbare />
    </div>
  );
}

export default App;
