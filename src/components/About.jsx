import React from "react";

function About() {
    return (
        <section id="about" className="py-20 px-8 text-center bg-[#0f1c3f]">
            <h2 className="text-3xl font-bold text-[#64ffda] mb-6">About Me</h2>
            <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                I’m a <span className="font-semibold text-white">Software Developer II</span>
                with a strong background in <span className="text-white">Java, Spring Boot, and React</span>,
                dedicated to building <span className="text-white">efficient and scalable applications</span>.
                Over the past 2+ years, I’ve honed my skills in <span className="text-white">backend development</span>,
                database management with <span className="text-white">MongoDB & SQL</span>, and
                API testing using <span className="text-white">Postman</span>.
                <br /><br />
                I enjoy working on <span className="text-white">end-to-end solutions</span>, from designing
                REST APIs to implementing reliable and maintainable architectures. My focus is always on
                writing <span className="text-white">clean, maintainable code</span> and delivering impactful
                software solutions.
            </p>

        </section>
    );
}

export default About;
