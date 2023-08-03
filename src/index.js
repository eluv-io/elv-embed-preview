import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import {observer, Provider} from "mobx-react";

import "Assets/stylesheets/app.scss";
import * as Stores from "./stores";
import Home from "Components/Home";
import {PageLoader} from "Components/Loader";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

export const appRoutes = [
  {path: "/", Component: <Home />, label: "Home"},
];

const App = observer(() => {
  if(!rootStore.loaded) { return <PageLoader />; }

  return (
    <main>
      <Routes>
        {
          appRoutes.map(({path, Component}) => (
            <Route
              exact={true}
              key={path}
              path={path}
              element={Component}
            />
          ))
        }
      </Routes>
    </main>
  );
});

rootElement.render(
  <Provider {...Stores}>
    <React.StrictMode>
      <HashRouter>
        <div className="app-container">
          <App />
        </div>
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
