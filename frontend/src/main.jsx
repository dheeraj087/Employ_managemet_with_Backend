import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./reduxtoolkit/store.js";
import { Data } from "./data.jsx";
import App from "./App.jsx";
import Form from "./compnent/form.jsx";
import EmployList from "./compnent/employList.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Data />
    <App />
    <EmployList />
  </Provider>
);
