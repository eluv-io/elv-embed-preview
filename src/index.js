import React from "react";
import ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes} from "react-router-dom";
import {observer, Provider} from "mobx-react";

import "Assets/stylesheets/app.scss";
import * as Stores from "./stores";
import Grid from "Components/Grid";
import {PageLoader} from "Components/common/Loader";

const rootElement = ReactDOM.createRoot(document.getElementById("app"));

const App = observer(() => {
  if(!rootStore.loaded) { return <PageLoader />; }

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route exact={true} path="/" element={<Grid />} />
        </Routes>
      </main>
    </HashRouter>
  );
});

rootElement.render(
  <Provider {...Stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
