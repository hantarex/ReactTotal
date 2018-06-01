import {combineReducers} from 'redux';
import FootballMatches from './FootballMatches';
import MatchesConditions from './MatchesConditions';
import ActivePanel from './ActivePanel';

const allReducers = combineReducers({
    footballMatches: FootballMatches,
    matchesConditions: MatchesConditions,
    activePanel: ActivePanel
});

export default allReducers;