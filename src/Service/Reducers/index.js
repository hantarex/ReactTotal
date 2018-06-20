import {combineReducers} from 'redux';
import FootballMatches from './FootballMatches';
import MatchesConditions from './MatchesConditions';
import {activePanel, itemsIsLoading} from "./ActivePanel";
import {MainLoading} from "./MainLoading";
import {Data} from "./Data";
import {DataMatch} from "./DataMatch";
import {MatchLoading} from "./MatchLoading";
import {SelectedCondition} from "./SelectedCondition";
import {Bet} from "./Bet";
import {Check} from "./Check";

const allReducers = combineReducers({
    mainLoading: MainLoading,
    matchLoading: MatchLoading,
    activePanel: activePanel,
    itemsIsLoading: itemsIsLoading,
    data: Data,
    dataMatch: DataMatch,
    selectedCondition: SelectedCondition,
    bet: Bet,
    setCheck: Check,
});

export default allReducers;