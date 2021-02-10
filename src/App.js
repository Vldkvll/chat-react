import "./App.css";

import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='chatdev'
			userSecret='123123'
			projectID='7999f6db-b355-4669-88b7-2565e03d0b2c'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

            export default App;
            