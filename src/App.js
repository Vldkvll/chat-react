import "./App.css";

import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

export function App() {

	if(!localStorage.getItem('username')) {
		return <LoginForm />
	}
	return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='7999f6db-b355-4669-88b7-2565e03d0b2c'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

            export default App;
            