import React, {Component} from 'react';
import {connect} from 'react-redux';
import TestFetch from "../FetchData/TestFetch";

class Matches extends Component {
    render() {
        return (
            <div>
                {this.showMatches()}
            </div>
        )
    }

    showMatches() {
        return this.props.footballMatches.map((match) => {
            return (
                <div key={match.id} onClick={() => {this.props.selectMatches(match)}}>
                    {match.name}
                </div>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        footballMatches: state.footballMatches
    }
}

function matchDispatchToProps(dispatch){
    return {
        selectMatches: (match) => dispatch(TestFetch(match))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Matches);