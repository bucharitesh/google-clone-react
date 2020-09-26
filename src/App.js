import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import AppRoutes from "./Routes";

export const AppContext = createContext();

function App() {
  return (
    <HelmetProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </StateProvider>
    </HelmetProvider>
  );
}

export default App;
