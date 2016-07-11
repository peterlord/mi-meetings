const initialState = [
	{id: 1, text: 'Hello world'},
	{id: 2, text: 'Goodbye world'}
]

function messagesReducer(state = initialState, action) {
	switch(action.type) {
		case 'ADD_MESSAGE_TEXT':
			return [...state, action.message]
		default:
			return state;
	}
};

export default messagesReducer;