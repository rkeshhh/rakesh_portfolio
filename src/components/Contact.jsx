import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
    const email = "salugurakesh03@gmail.com";
    const handleGmailClick = (e) => {
        e.preventDefault();
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    };

    return (
        <section id="contact" className="py-16 bg-[#0a192f] text-center px-4 sm:px-6" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#64ffda]">Contact Me</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-lg max-w-xl mx-auto">
                Feel free to reach out to me for any questions or opportunities!
            </p>
            <div className="flex justify-center space-x-6 mb-6 text-2xl sm:text-3xl">
                <a href="https://linkedin.com/in/salugu-rakesh-b59ba61bb/"
                   target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#64ffda] focus:text-[#64ffda] active:text-[#64ffda] transform hover:scale-110 focus:scale-110 active:scale-110 transition duration-300 relative group">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com"
                   target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#64ffda] focus:text-[#64ffda] active:text-[#64ffda] transform hover:scale-110 focus:scale-110 active:scale-110 transition duration-300 relative group">
                    <FaInstagram />
                </a>
                <a href="https://github.com/rkeshhh"
                   target="_blank" rel="noopener noreferrer"
                   className="hover:text-[#64ffda] focus:text-[#64ffda] active:text-[#64ffda] transform hover:scale-110 focus:scale-110 active:scale-110 transition duration-300 relative group">
                    <FaGithub />
                </a>
                <a href={`mailto:${email}`} onClick={handleGmailClick}
                   className="hover:text-[#64ffda] focus:text-[#64ffda] active:text-[#64ffda] transform hover:scale-110 focus:scale-110 active:scale-110 transition duration-300 relative group">
                    <FaEnvelope />
                </a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
                Designed & Developed by <span className="text-[#64ffda]">Salugu Rakesh</span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
                © {new Date().getFullYear()} Salugu Rakesh. All rights reserved.
            </p>
        </section>
    );
}

export default Contact;
