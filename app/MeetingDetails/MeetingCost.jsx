import React, { PropTypes } from 'react'

const MeetingCost = (props) => {
	return(
		<div>
			<div>£{props.meeting.cost.toFixed(2)}</div>
			<div>
				<button type="button" onClick={ () => props.onStartMeeting() }>
	          		Start Meeting
	          	</button>
	        </div>
        </div>
	);
}

MeetingCost.proptypes = {
	meeting: React.PropTypes.object
}

export default MeetingCost