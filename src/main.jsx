import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import "./App.css";

const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="text-[3rem] md:text-[4rem] font-thin h-screen w-screen bg-white  text-center flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
