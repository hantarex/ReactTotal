import React from 'react';
import SelectPanel from './SelectPanel';
import MatchList from './MatchList';
import {HashRouter, Route, Switch} from "react-router-dom";
import InfoComponent from "./InfoComponent";
import {createHashHistory} from "history";
import BetHistoryComponent from "./BetHistoryComponent";
import {connect} from "react-redux";

const Totalizator = ({page}) => {
    const showPage = () => {
        switch (page){
            case "history":
                return (
                    <div>
                        <BetHistoryComponent/>
                    </div>
                );
            case "info":
                return (
                    <div>
                        <InfoComponent/>
                    </div>
                );
            default:
                return (
                  <div>
                      <MatchList/>
                      <SelectPanel/>
                  </div>
                );
        }
    };
    return showPage();
};


export default connect(
    state => ({
        page: state.page,
    })
)(Totalizator)