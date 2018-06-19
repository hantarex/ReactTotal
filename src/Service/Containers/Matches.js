import React, {Component} from 'react';
import {connect} from 'react-redux';
import TestFetch from "../FetchData/TestFetch";
import '../Styles/StylesMatches.css'
import GetDataMatch from "../FetchData/GetDataMatch";

class Matches extends Component {
    constructor(){
        super();
        this.state = {
            activeMatch: null
        }
    }

    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        )
    }

    clickMatch(match, event) {
        this.setState({activeMatch: match.id});
        this.props.selectMatches(match)
    }

    showMatches() {
        let main = this;
        return this.props.footballMatches.map((match) => {
            return (
                <div key={match.id} className={"match" + (this.state.activeMatch === match.id ? " active": "" )} onClick={() => {main.clickMatch(match)}}>
                    <div>
                        <div className="data">
                            <div className="day">
                                {match.date}
                            </div>
                            <div  className="hour">
                                {match.time}
                            </div>
                        </div>
                        <div className="command_block">
                            <div className="flags">
                            <img src="img/blank.gif" className={"flag " +  match.team_1.flag} alt={match.team_1.name} />
                                <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true" />
                            <img src="img/blank.gif" className={"flag " +  match.team_2.flag} alt={match.team_2.name} />
                            </div>
                            <div className="commands">
                                <span className="team">
                                    {match.team_1.name}
                                </span>
                                <span className="delimiter">
                                    -
                                </span>
                                <span className="team">
                                    {match.team_2.name}
                                </span>
                            </div>
                        </div>
                        <div className="check">
                            <span className="glyphicon glyphicon glyphicon-ok-circle" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        footballMatches: state.data.matches
    }
}

function matchDispatchToProps(dispatch){
    return {
        selectMatches: (match) => dispatch(GetDataMatch(match))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Matches);