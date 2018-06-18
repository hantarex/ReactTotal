import {combineReducers} from 'redux';
import FootballMatches from './FootballMatches';
import MatchesConditions from './MatchesConditions';
import {activePanel, itemsIsLoading} from "./ActivePanel";
import {MainLoading} from "./MainLoading";
import {Data} from "./Data";
import {DataMatch} from "./DataMatch";
import {MatchLoading} from "./MatchLoading";

const allReducers = combineReducers({
    mainLoading: MainLoading,
    matchLoading: MatchLoading,
    activePanel: activePanel,
    itemsIsLoading: itemsIsLoading,
    data: Data,
    dataMatch: DataMatch
});

export default allReducers;