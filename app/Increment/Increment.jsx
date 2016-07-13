import React, { PropTypes } from 'react'

const Increment = (props) => {
	return(
		<div>
			<p>This is where the meeting cost will be displayed.</p>
			<p>£{props.meeting.liveCost.toFixed(2)}</p>
        </div>
	);
}

Increment.proptypes = {
	meeting: React.PropTypes.object
}

export default Increment