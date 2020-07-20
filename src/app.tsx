import React from "react";
import LoginForm from "./components/organisms/login-form";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./config/global-styles";
import routes from "./config/routes";

function App() {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {routes.map(({ exact, path, component }, index) => (
              <Route key={index} exact={exact} path={path} component={component} />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
