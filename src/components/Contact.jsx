import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
    const email = "salugurakesh03@gmail.com";

    const handleGmailClick = (e) => {
        e.preventDefault();
        // Open Gmail compose in browser
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    };

    return (
        <section id="contact" className="py-16 bg-[#0a192f] text-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4 text-[#64ffda]">Contact Me</h2>
            <p className="text-gray-300 mb-8 text-lg">
                Feel free to reach out to me for any questions or opportunities!
            </p>

            {/* Navigation Links */}
            <div className="flex justify-center space-x-6 mb-6 text-gray-300 text-lg">
                <a href="#about" className="hover:text-[#64ffda] transition-colors duration-300">About Me</a>
                <a href="#skills" className="hover:text-[#64ffda] transition-colors duration-300">Skills & Tools</a>
                <a href="#experience" className="hover:text-[#64ffda] transition-colors duration-300">Experience</a>
                <a href="#projects" className="hover:text-[#64ffda] transition-colors duration-300">Projects</a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6 text-3xl">
                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/salugu-rakesh-b59ba61bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#64ffda] transform hover:scale-110 transition duration-300 relative group"
                >
                    <FaLinkedin />
                    <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-[#64ffda] transition-opacity duration-300"></span>
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#64ffda] transform hover:scale-110 transition duration-300 relative group"
                >
                    <FaInstagram />
                    <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-pink-500 transition-opacity duration-300"></span>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/rkeshhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#64ffda] transform hover:scale-110 transition duration-300 relative group"
                >
                    <FaGithub />
                    <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-gray-400 transition-opacity duration-300"></span>
                </a>

                {/* Gmail */}
                <a
                    href={`mailto:${email}`}
                    onClick={handleGmailClick}
                    className="hover:text-[#64ffda] transform hover:scale-110 transition duration-300 relative group"
                >
                    <FaEnvelope />
                    <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 bg-red-500 transition-opacity duration-300"></span>
                </a>
            </div>

            {/* Footer Text */}
            <p className="text-gray-400 text-sm">
                Designed & Developed by <span className="text-[#64ffda]">Salugu Rakesh</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
                © {new Date().getFullYear()} Salugu Rakesh. All rights reserved.
            </p>
        </section>
    );
}

export default Contact;
