// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#000625] text-white py-10 w-full mt-auto">
            <div className="container mx-auto px-10 flex flex-wrap justify-between">

                {/* About Us */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-4">About Us</h3>
                    <p className="text-sm leading-6">
                        We are a company that specializes in providing high-quality products
                        and services to our customers. Our team is dedicated to ensuring that
                        our customers are satisfied with their experience.
                    </p>
                </div>

                {/* Contact Us */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="mailto:info@company.com" className="hover:underline">
                                Email: info@company.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:123-456-7890" className="hover:underline">
                                Phone: 123-456-7890
                            </a>
                        </li>
                        <li>
                            <a href="https://www.company.com/contact" className="hover:underline">
                                Contact Form
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/company" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-500">
                            <Facebook size={20} />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.twitter.com/company" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
                            <Twitter size={20} />
                            <span>Twitter</span>
                        </a>
                        <a href="https://www.instagram.com/company" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-pink-500">
                            <Instagram size={20} />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Footer Copyright */}
            <div className="text-center border-t border-gray-600 mt-8 pt-4">
                <p className="text-sm">&copy; 2023 Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
