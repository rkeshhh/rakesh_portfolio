import React from "react";
import profile from "../assets/images/profile.jpg";

function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-[#0a192f]">
            {/* Left Section (Text) */}
            <div className="flex-1 space-y-6 text-center md:text-left md:pr-12">
                <h1 className="text-5xl font-bold text-white">
                    Hi, I'm Salugu Rakesh
                </h1>
                <p>
                    I am a Software Developer II with over 2+ years of professional experience
                    specializing in Java development, Spring Boot, and REST APIs. I have expertise in
                    building scalable backend systems, working with MongoDB and SQL databases, and
                    performing API testing using Postman.
                    <br /><br />
                    I am passionate about delivering high-quality, maintainable code, and I enjoy working
                    on full-stack projects where I can contribute to both frontend and backend solutions.
                    I also have hands-on experience with Docker and CI/CD pipelines.
                </p>


                {/* Download CV Button - No Hover Effect */}
                <a
                    href="/Salugu_Rakesh_Resume_2025.pdf"
                    download="Salugu_Rakesh_Resume_2025.pdf"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg inline-block transition-transform duration-300 hover:scale-110 hover:text-[#64ffda]"
                >
                    Download CV
                </a>



            </div>

            {/* Profile Image Section */}
            <div
                className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
                style={{ marginLeft: "-5%" }}
            >
                <div className="rounded-full p-[6px] bg-gradient-to-r from-purple-500 to-blue-500 inline-block transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(100,255,218,0.7)]">
                    <img
                        src={profile}
                        alt="Salugu Rakesh"
                        className="w-80 h-80 object-cover object-top rounded-full border-4 border-[#0a192f] shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
