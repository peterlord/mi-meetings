import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

const Increment = (props) => {
	return(
		<Grid>
			<Row>
				<Col className="text-center"><h2>This meeting has cost so far:</h2></Col>
			</Row>
			<Row>
				<Col className="text-center"><h1>£{props.meeting.liveCost.toFixed(2)}</h1></Col>
			</Row>
			<Row>
				<Col className="text-center"><Image src="https://files.slack.com/files-pri/T045TULD0-F1QF8JZSS/pinkrobot_dance_flynn.gif"/></Col>
			</Row>
        </Grid>
	);
}

Increment.proptypes = {
	meeting: React.PropTypes.object
}

export default Increment