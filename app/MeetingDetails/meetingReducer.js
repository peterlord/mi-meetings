import { ADD_MEETING } from './addMeetingAction';
import { COSTS_UPDATED } from './costUpdatedAction'

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
		case 'COSTS_UPDATED':
			return {
				...state,
				cost: action.cost
			}
		default: 
			return state;
	}
}

export default meetingReducer;