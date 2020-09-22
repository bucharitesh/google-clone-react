import React, { lazy, Suspense, Fragment, createContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useLocation,
  Redirect,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";

import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

const Home = lazy(() => import("./Apps/Home"));
const Search = lazy(() => import("./Apps/Search"));
const Drive = lazy(() => import("./Apps/Drive"));
const Maps = lazy(() => import("./Apps/Maps"));
const NotFound = lazy(() => import("./Pages/404"));
const Login = lazy(() => import("./Auth/User/Login/Login"));
const Register = lazy(() => import("./Auth/User/Register/Register"));

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

function AppRoutes() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Fragment>
      <Helmet>
        <link
          rel="canonical"
          href={`https://google.bucharitesh.in${pathname}`}
        />
      </Helmet>
      <GlobalStyles />
      <Suspense fallback={<Fragment />}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/maps" component={Maps} />
          <Route path={["/app", "/apps", "/home"]}>
            <Redirect to="/" />
          </Route>
          <Route path="/search" component={Search} />
          <Route path="/drive" component={Drive} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
}

html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
  'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default App;
