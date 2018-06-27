import React from 'react';
import SelectPanel from './SelectPanel';
import MatchList from './MatchList';
import {Route} from "react-router-dom";
import InfoComponent from "./InfoComponent";
import BetHistoryComponent from "./BetHistoryComponent";

const Totalizator = () => {
    return (
            <div>
                    <Route exact path="/" component={MatchList} />
                    <Route exact path="/" component={SelectPanel}/>
                    <Route exact path="/info" component={InfoComponent}/>
                    <Route exact path="/history" component={BetHistoryComponent}/>
            </div>
    );
};

export default Totalizator;