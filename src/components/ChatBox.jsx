// src/components/Chatbox.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* Chat Icon */}
            <div
                className="fixed bottom-20 right-20 w-[65px] h-[65px] flex items-center justify-center
                   bg-white border-2 border-gray-300 rounded-full shadow-md cursor-pointer
                   hover:shadow-lg z-50"
                onClick={toggleChat}
            >
                <MessageCircle size={32} className="text-blue-600" />
            </div>

            {/* Chatbox */}
            {isOpen && (
                <div className="fixed bottom-20 right-20 w-[425px] h-[575px] bg-white border border-gray-300
                        rounded-lg shadow-lg flex flex-col justify-between p-6 z-50">

                    {/* Chat Header */}
                    <div className="flex justify-between items-center border-b pb-3">
                        <h3 className="text-lg font-bold text-gray-800">Chat with Us</h3>
                        <button
                            className="bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                            onClick={toggleChat}
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        <div className="bg-gray-100 p-3 rounded-lg text-gray-700">
                            👋 Hello! How can we help you today?
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="border-t pt-3">
            <textarea
                className="w-full h-[100px] p-3 border rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
            />
                        <button
                            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbox;
