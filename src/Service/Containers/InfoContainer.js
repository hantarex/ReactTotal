import React from 'react';
import {connect} from "react-redux";

const InfoContainer = ({info}) => {
    return (
        <div>
            {info}
        </div>
    )
};

export default connect(
    state => ({
        info: state.data.info
    })
)(InfoContainer)