import {combineReducers} from 'redux';
import {activePanel, itemsIsLoading} from "./ActivePanel";
import {MainLoading} from "./MainLoading";
import {Data} from "./Data";
import {DataMatch} from "./DataMatch";
import {MatchLoading} from "./MatchLoading";
import {SelectedCondition} from "./SelectedCondition";
import {Bet} from "./Bet";
import {Check} from "./Check";
import {History} from "./History";
import {HistoryLoading} from "./HistoryLoading";
import {OnSubmitBet} from "./OnSubmitBet";
import {ErrorBlock} from "./ErrorBlock";
import {routerReducer} from 'react-router-redux';

const allReducers = combineReducers({
    mainLoading: MainLoading,
    router: routerReducer,
    matchLoading: MatchLoading,
    historyLoading: HistoryLoading,
    activePanel: activePanel,
    itemsIsLoading: itemsIsLoading,
    data: Data,
    dataMatch: DataMatch,
    selectedCondition: SelectedCondition,
    bet: Bet,
    setCheck: Check,
    errorBlock: ErrorBlock,
    history: History,
    onSubmitBet: OnSubmitBet
});

export default allReducers;