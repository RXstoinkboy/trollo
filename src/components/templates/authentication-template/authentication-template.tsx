import React, { ReactElement } from "react";
import StyledAuthenticationTemplate from "./authentication-template.styles";
// import Title from '../../atoms/title'
// import SignUpForm from '../../organisms/sign-up-form'
import Bubbles from "../../molecules/bubbles";
import Hero from "../../organisms/hero";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import routes from "./authentication-template.routes";
import LoginForm from '../../organisms/login-form'

interface Props {
  heroData: string[];
}

export default function AuthenticationTemplate({
  heroData,
}: Props): ReactElement {

    let {path: currentPath} = useRouteMatch();
  return (
    <StyledAuthenticationTemplate>
      <Hero heroData={heroData} />
      <Bubbles />
      <Switch>
        {routes.map(({ exact, path, component }, index) => <Route key={index} exact={exact} path={`${currentPath}${path}`} component={component} />)}
      </Switch>
    </StyledAuthenticationTemplate>
  );
}
