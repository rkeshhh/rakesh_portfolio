import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub} from "react-icons/fa";
import { SiMongodb, SiSelenium, SiPostman, SiSpringboot, SiSpring } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
    const skillClass =
        "flex items-center gap-2 text-white transition-transform duration-300 hover:scale-110 hover:text-[#64ffda]";

    return (
        <section id="skills" className="py-20 bg-[#0a192f] text-center">
            <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Skills & Tools</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Programming Languages */}
                <div className="border border-[#64ffda]/30 rounded-lg p-6 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.5)]">
                    <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
                    <div className="flex flex-col gap-4 items-center">
                        <div className={skillClass}>
                            <FaHtml5 size={40} color="#e34f26" /> <span>HTML5</span>
                        </div>
                        <div className={skillClass}>
                            <FaCss3Alt size={40} color="#1572B6" /> <span>CSS3</span>
                        </div>
                        <div className={skillClass}>
                            <FaJs size={40} color="#F7DF1E" /> <span>JavaScript</span>
                        </div>
                        <div className={skillClass}>
                            <FaJava size={40} color="#f89820" /> <span>Java</span>
                        </div>
                        <div className={skillClass}>
                            <SiMongodb size={40} color="#47A248" /> <span>MongoDB</span>
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="border border-[#64ffda]/30 rounded-lg p-6 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.5)]">
                    <h3 className="text-xl font-semibold text-white mb-4">Tools & Technologies</h3>
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className={skillClass}>
                            <FaReact size={40} color="#61DAFB" /> <span>React</span>
                        </div>
                        <div className={skillClass}>
                            <SiSpringboot size={40} color="#6DB33F" /> <span>Spring Boot</span>
                        </div>
                        <div className={skillClass}>
                            <FaNodeJs size={40} color="#339933" /> <span>Node.js</span>
                        </div>
                        <div className={skillClass}>
                            <SiSpring size={40} color="#6DB33F" /> <span>Spring Reactive</span>
                        </div>
                        <div className={skillClass}>
                            <FaAws size={40} color="#FF9900" /> <span>AWS</span>
                        </div>
                        <div className={skillClass}>
                            <FaDocker size={40} color="#2496ED" /> <span>Docker</span>
                        </div>
                        <div className={skillClass}>
                            <SiSelenium size={40} color="#43B02A" /> <span>Selenium</span>
                        </div>
                        <div className={skillClass}>
                            <SiPostman size={40} color="#FF6C37" /> <span>Postman</span>
                        </div>
                        <div className={skillClass}>
                            <FaGithub size={40} color="#ffffff" /> <span>GitHub</span>
                        </div>
                        <div className={skillClass}>
                            <VscVscode size={40} color="#0078d7" /> <span>VS Code</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
