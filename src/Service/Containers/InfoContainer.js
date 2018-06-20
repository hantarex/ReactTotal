import React from 'react';
import {connect} from "react-redux";

const InfoContainer = ({info}) => {
    return (
        <div className="info">
            <div dangerouslySetInnerHTML={{__html:info}} />
        </div>
    )
};

export default connect(
    state => ({
        info: state.data.info
    })
)(InfoContainer)