import { ADD_MEETING } from './addMeetingAction';

const initialState = {
	showCosts: false
}

function meetingReducer (state = initialState, action) {
	switch (action.type) {
		case 'ADD_MEETING':
			return action.meeting
		case 'SHOW_COSTS':
			return {
				...state,
				showCosts: action.showCosts
			}
		default: 
			return state;
	}
}

export default meetingReducer;