import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Increment from './Increment.jsx';
import { hashHistory } from 'react-router';

class IncrementContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'IncrementContainer';
    }
    render() {
        return <div>
        	<Increment />
        </div>;
    }
}

function mapStateToProps(state) {
	return {
		meeting: state.meeting
	};
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default IncrementContainer = connect(mapStateToProps, mapDispatchToProps)(IncrementContainer);