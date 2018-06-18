import React from 'react';
import SelectPanel from './SelectPanel';
import MatchList from './MatchList';
import {HashRouter, Route, Switch} from "react-router-dom";
import InfoComponent from "./InfoComponent";
import {createHashHistory} from "history";

const Totalizator = () => {
    return (
        <HashRouter history={createHashHistory}>
            <div>
                <MatchList/>
                <Switch>
                    <Route exact path="/" component={InfoComponent}/>
                    <Route exact path="/bet" component={SelectPanel}/>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default Totalizator;