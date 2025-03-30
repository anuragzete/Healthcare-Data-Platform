// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow">
                <SearchForm />
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
