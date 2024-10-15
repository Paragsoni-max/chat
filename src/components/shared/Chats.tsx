"use client";

// @ts-expect-error This is a workaround due to type issues with the react-chat-engine library
import { ChatEngine } from 'react-chat-engine';
import { Button } from '../ui/button';

const Chat = () => {
    const handleClearCredentials = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        window.location.reload();
    };

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Optional: Handle cases where the credentials are not found
    if (!storedUsername || !storedPassword) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Please log in to access the chat.</p>
            </div>
        );
    }

    return (
        <>
            <ChatEngine
                height="80vh"
                projectID='2f05e116-b4c9-4898-bd9e-d09696fff5ef'
                userName={storedUsername}
                userSecret={storedPassword}
            />
            <div className='bg-[#188fffb4] rounded-md flex items-center justify-center h-[20vh]'>
                <Button className='w-fit mx-auto bg-red-600' size={"lg"} onClick={handleClearCredentials}>
                    Logout
                </Button>
            </div>
        </>
    );
};

export default Chat;
