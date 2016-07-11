import { CLEAR_MESSAGE_TEXT } from './clearMessageAction';

function messageTextReducer (state = '', action) {
	switch (action.type) {
		case 'CHANGE_MESSAGE_TEXT':
			return action.text;
		case 'CLEAR_MESSAGE_TEXT':
			return '';
		default: 
			return state;
	}
}

export default messageTextReducer;