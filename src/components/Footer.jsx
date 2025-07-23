import React from "react";

function Footer() {
    return (
        <footer className="bg-[#0a192f] py-6 text-center text-gray-400 text-sm" data-aos="fade-up">
            © {new Date().getFullYear()} Salugu Rakesh | All rights reserved.
        </footer>
    );
}

export default Footer;
