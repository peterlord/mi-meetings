import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap';

const MeetingCost = (props) => {
	return(
		<Grid>
			<Row>
				<Col className="text-center"><h1>£{props.meeting.cost.toFixed(2)}</h1></Col>
			</Row>
			<Row>
				<Col className="text-center"><Button className="btn btn-primary" type="button" onClick={ () => props.onStartMeeting() }>
		          		Start Meeting
		          	</Button></Col>
			</Row>
        </Grid>
	);
}

MeetingCost.proptypes = {
	meeting: React.PropTypes.object
}

export default MeetingCost