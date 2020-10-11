import React, { lazy, Suspense, Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet-async";

import { Switch, Route, useLocation } from "react-router-dom";

const Home = lazy(() => import("../Apps/Home"));
const Search = lazy(() => import("../Apps/Search"));
// const Drive = lazy(() => import("../Apps/Drive"));
const Maps = lazy(() => import("../Apps/Maps"));
const Store = lazy(() => import("../Apps/Store"));
const NotFound = lazy(() => import("../Pages/404"));

function Routes() {
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
          <Route path="/search" component={Search} />
          <Route path="/maps" component={Maps} />
          {/* <Route path="/drive" component={Drive} /> */}
          <Route path="/store" component={Store} />
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

export default Routes;
