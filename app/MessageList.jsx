import React, { PropTypes } from 'react'

const MessageList = (props) => <ul>{props.messages.map(msg => <li key={msg.id}>{msg.text}</li>)}</ul>;

MessageList.proptypes = {
	messages: PropTypes.array.isRequired
};

export default MessageList