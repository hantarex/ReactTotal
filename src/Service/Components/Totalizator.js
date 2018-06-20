import React from 'react';
import SelectPanel from './SelectPanel';
import MatchList from './MatchList';
import {HashRouter, Route, Switch} from "react-router-dom";
import InfoComponent from "./InfoComponent";
import {createHashHistory} from "history";
import BetHistoryComponent from "./BetHistoryComponent";

const Totalizator = () => {
    return (
        <HashRouter history={createHashHistory}>
            <div>
                <Switch>
                    <Route exact path="/" component={MatchList} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={SelectPanel}/>
                    <Route exact path="/info" component={InfoComponent}/>
                    <Route exact path="/history" component={BetHistoryComponent}/>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default Totalizator;