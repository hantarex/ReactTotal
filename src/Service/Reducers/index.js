import {combineReducers} from 'redux';
import FootballMatches from './FootballMatches';
import MatchesConditions from './MatchesConditions';
import {activePanel, itemsIsLoading} from "./ActivePanel";

const allReducers = combineReducers({
    footballMatches: FootballMatches,
    matchesConditions: MatchesConditions,
    activePanel: activePanel,
    itemsIsLoading: itemsIsLoading
});

export default allReducers;