import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

const Increment = (props) => {
	return(
		<Grid>
			<Row>
				<Col className="text-center"><h2>This meeting has cost so far:</h2></Col>
			</Row>
			<Row>
				<Col className="text-center"><h1>£{props.meeting.liveCost.toFixed(2)}</h1></Col>
			</Row>
        </Grid>
	);
}

Increment.proptypes = {
	meeting: React.PropTypes.object
}

export default Increment