import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MeetingForm from './MeetingForm.jsx';
import MeetingCost from './MeetingCost.jsx';
import addMeetingAction from './addMeetingAction.js';
import showCostsAction from './showCostsAction.js';
import { hashHistory } from 'react-router';

class MeetingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MeetingContainer';
    }
    render() {
        return <div>
        	<MeetingForm {...this.props} />
        	{ this.props.meeting.showCosts ? <MeetingCost {...this.props} /> : null }
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
		onAddMeeting: (meeting) => {
			dispatch(addMeetingAction(meeting));
			dispatch(showCostsAction(true));

			//hashHistory.push('/chat');
		},
	}
}

export default MeetingContainer = connect(mapStateToProps, mapDispatchToProps)(MeetingContainer);