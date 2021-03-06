import React, {Component} from 'react';
import {connect} from 'react-redux';
import TestFetch from "../FetchData/TestFetch";
import '../Styles/StylesMatches.css'
import GetDataMatch from "../FetchData/GetDataMatch";

class Matches extends Component {
    constructor() {
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
        this.setState({activeMatch: match});
        this.props.selectMatches(match)
    }

    showWasBet(match) {
        if (match.active.toString() === "1") {
            return (
                <div className="check">
                    <span className="glyphicon glyphicon glyphicon-ok-circle" aria-hidden="true"/>
                </div>
            );
        }
    }

    showMatches() {
        let main = this;
        return this.props.footballMatches.matches.map((match) => {
            return (
                <div key={match.id} className={"match" + (this.state.activeMatch === match.id ? " active" : "" )}
                     onClick={() => {
                         main.clickMatch(match.id)
                     }}>
                    <div>
                        <div className="data">
                            <div className="day">
                                {match.date}
                            </div>
                            <div className="hour">
                                {match.time}
                            </div>
                        </div>
                        <div className="command_block">
                            <div className="commands">
                                <div className="command">
                                    <div className="flag">
                                        <img src="/css/flags/blank.gif" className={"flag " + match.team_1.flag}
                                             alt={match.team_1.name}/>
                                    </div>
                                    <div/>
                                    <span>{match.team_1.name}</span>
                                </div>
                                <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true"/>
                                <div className="command">
                                    <div>
                                        <img src="/css/flags/blank.gif" className={"flag " + match.team_2.flag}
                                             alt={match.team_2.name}/>
                                    </div>
                                    <div/>
                                    <span>{match.team_2.name}</span>
                                </div>
                            </div>
                        </div>
                        {main.showWasBet(match)}
                    </div>
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        footballMatches: state.data
    }
}

function matchDispatchToProps(dispatch) {
    return {
        selectMatches: (match) => dispatch(GetDataMatch(match))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Matches);