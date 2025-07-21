import { router } from "./router";
import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";

const Routers = () => useRoutes(router);

function App() {
  return (
    <HashRouter>
      <Routers />
    </HashRouter>
  );
}

export default App;
