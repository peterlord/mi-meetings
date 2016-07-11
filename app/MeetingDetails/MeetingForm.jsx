import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


const MeetingForm = (props) => {
   const {fields: {meetingLength, attendee, noOfAttendees}, handleSubmit, onAddMeeting } = props;

   return (
       <Form horizontal onSubmit={handleSubmit((values) => onAddMeeting(values))}>
       		<FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        Meeting Length (mins)
			      </Col>
			      <Col sm={2}>
			        <FormControl type="number" placeholder="45" {...meetingLength}/>
			      </Col>
			</FormGroup>
			<FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={2}>
			        Attendee role
			      </Col>
			      <Col sm={3}>
			        <FormControl type="text" placeholder="Engineer" {...attendee}/>
			      </Col>
			      <Col sm={1}>
			        <FormControl type="text" placeholder="no." {...noOfAttendees}/>
			      </Col>
			</FormGroup>
			<FormGroup>
		      <Col smOffset={2} sm={10}>
		        <Button type="submit">Show me cost</Button>
		      </Col>
		    </FormGroup>
       </Form>
   )
};

export default reduxForm({
	form: 'MeetingForm',
	fields: ['meetingLength', 'attendee']
})(MeetingForm);
