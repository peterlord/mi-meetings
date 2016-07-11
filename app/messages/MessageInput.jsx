import React, { PropTypes } from 'react'

const MessageInput = (props) => <div>
	<input type="text" 
		   value={props.messageText} 
		   onChange={(event) => props.onMessageTextChanged(event.target.value)}
	/>
	<button onClick={() => props.onClickMessageAdd(props.messageText)}>
		Add
	</button>
</div>;

MessageInput.PropTypes = {
	messageText: PropTypes.string.isRequired,
	onMessageTextChanged: PropTypes.func.isRequired,
	onClickMessageAdd: PropTypes.func.isRequired
}

export default MessageInput