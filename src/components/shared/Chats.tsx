"use client"

import { useRouter } from 'next/navigation';
// @ts-expect-error This is a workaround due to type issues with the react-chat-engine library
import { ChatEngine } from 'react-chat-engine';
import { Button } from '../ui/button';

const Chat = () => {
    const router = useRouter();
    const handleClearCredentials = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        router.push('/')
    };
    return (
        <>
            <ChatEngine
                height="80vh"
                projectID='043f0f24-5761-4801-b076-3d7cb15acbaf'
                userName='Chanchal'
                userSecret='@8ParagSoni'
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
