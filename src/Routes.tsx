import React from "react";
import { Switch, Route } from 'react-router-dom';
import Detail from "./components/Detail";
import Home from "./components/Home";


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/detail/:slug">
                <Detail/>
            </Route>
        </Switch>
    )

}

export default Routes;