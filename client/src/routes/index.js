import React, {Suspense, lazy} from "react";
import { Switch ,Route } from 'react-router-dom';

import Home from "../components/home"
import Issue from "../components/Issue"

const Router = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/issues/:id" component={Issue} />
    </Switch>
  )
}

export default Router