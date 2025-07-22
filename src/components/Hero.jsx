import React from "react";
import profile from "../assets/images/profile.jpg";

function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 bg-[#0a192f]">
            {/* Left Section (Text) */}
            <div className="flex-1 space-y-6 text-center md:text-left md:pr-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                    Hi, I'm Salugu Rakesh
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                    I am a <span className="text-white font-semibold">Software Developer II</span> with over 2+ years of professional experience
                    specializing in <span className="text-white">Java, Spring Boot, and REST APIs</span>. I have expertise in
                    building scalable backend systems, working with MongoDB and SQL databases, and performing API testing using Postman.
                    <br /><br />
                    I am passionate about delivering high-quality, maintainable code, and I enjoy working
                    on full-stack projects where I can contribute to both frontend and backend solutions.
                    I also have hands-on experience with Docker and CI/CD pipelines.
                </p>

                {/* Download CV Button */}
                <a
                    href="/Salugu_Rakesh_Resume_2025.pdf"
                    download="Salugu_Rakesh_Resume_2025.pdf"
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg inline-block transition duration-300 transform hover:scale-105 hover:text-[#64ffda] focus:scale-105 active:scale-105"
                >
                    Download CV
                </a>
            </div>

            {/* Profile Image Section */}
            <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                <div className="rounded-full p-[4px] sm:p-[6px] bg-gradient-to-r from-purple-500 to-blue-500 inline-block transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(100,255,218,0.7)] focus:scale-105 active:scale-105">
                    <img
                        src={profile}
                        alt="Salugu Rakesh"
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-4 border-[#0a192f] shadow-lg transition duration-300 transform hover:scale-105 focus:scale-105 active:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
