import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


const MeetingForm = (props) => {
   const {fields: {meetingLength, attendees, noOfAttendees}, handleSubmit, onAddMeeting, meeting} = props;

   return (
       <Form horizontal onSubmit={handleSubmit((values) => onAddMeeting(values))} onChange={handleSubmit((values) => onAddMeeting(values))}>
       		<FormGroup controlId="formHorizontalEmail">
			      <Col componentClass={ControlLabel} sm={3}>
			        Meeting Length (mins)
			      </Col>
			      <Col sm={3}>
			        <FormControl type="number" placeholder="45" {...meetingLength}/>
			      </Col>
			</FormGroup>

			<FormGroup>
				<Col componentClass={ControlLabel} sm={3}>
					Attendees
		        </Col>
			</FormGroup>

			{
				attendees.map((attendee, index) => {

					return (
						<FormGroup controlId="formHorizontalEmail" key={index}>
					      <Col smOffset={3} sm={3}>
					      <FormControl componentClass="select"
				              {...attendee.role}
				              value={attendee.role.value || ''}>
				              <option></option>
				              <option value="0">C-level</option>
				              <option value="1">Sales</option>
				              <option value="2">Operations</option>
				              <option value="3">Tech, Data</option>
				              <option value="4">Marketing</option>
				              <option value="5">Admin and support roles</option>
				              <option value="6">Senior leaders</option>
				          </FormControl>
					      </Col>
					      <Col sm={1}>
					        <FormControl type="text" placeholder="no." {...attendee.count}/>
					      </Col>
					      <Button type="button" onClick={() => {
			                attendees.removeField(index)  // remove from index
			              }}><i/> Remove
			              </Button>
						</FormGroup>
					)

				})

			}

			<FormGroup>
				<Col smOffset={3} sm={10}>
					<Button type="button" onClick={() => {
			            attendees.addField()}}>
		          		Add more attendees
		          	</Button>
		        </Col>
			</FormGroup>

			<FormGroup>
		      <Col smOffset={8} sm={2}>
		        <Button className="btn btn-success" class="btn btn-primary" type="submit">Show me cost</Button>
		      </Col>
		    </FormGroup>
       </Form>
   )
};

export default reduxForm({
	form: 'MeetingForm',
	fields: ['meetingLength', 'attendees[].role', 'attendees[].count', 'attendees[].role']
})(MeetingForm);
