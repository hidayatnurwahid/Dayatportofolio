// pages/Dashboard.js
"use client"
import { useState, useEffect } from 'react';
import Card from '../../../components/card';

export default function Dashboard() {
    const [messages, setMessages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function fetchMessages() {
        try {
            const res = await fetch('/api/messages');
            const data = await res.json();
            setMessages(data.data); 
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <>
            <Card title="List Of Messages" className="pb-8">
                <table className="min-w-full divide-y divide-gray-400">
                    <thead>
                        <tr>
                            <th>#No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Messages</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="min-w-full divide-y divide-gray-200">
                        {!isLoading && messages.map((msg, index) => (
                            <tr key={msg._id}>
                                <td>{index + 1}</td>
                                <td>{msg.name}</td>
                                <td>{msg.email}</td>
                                <td>{msg.subject}</td>
                                <td>{msg.messagee}</td>
                                {/* Api messages */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            
        </>
    );
}