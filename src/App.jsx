import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import SearchForm from "./components/SearchForm";
import ColorBubbles from "./components/ColorBubbles.jsx";
import Layout from "./components/Layout";

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Navbar />
            <div className="pt-20 px-4 md:px-12 lg:px-20">
                <SearchForm />
                <Layout />
            </div>
            <ColorBubbles />
            <ChatBox />
            <Footer />
        </div>
    );
};

export default App;
