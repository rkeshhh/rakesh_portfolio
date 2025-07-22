import React, { useState } from "react";
import goldImage from "../assets/images/gold.jpg";
import bookmarksImage from "../assets/images/bookmarks.jpg";
import weatherImage from "../assets/images/weather.jpeg";
import faceImage from "../assets/images/face.png";

const projects = [
    {
        title: "Gold Business Automation Website",
        duration: "Jul 2023 – Sep 2023",
        shortDescription:
            "Automated gold business operations with user roles, dashboards, and data export using Java Spring Boot and REST APIs.",
        details: [
            "Designed and developed a full-stack web application using Java Spring Boot to automate and streamline gold business operations.",
            "Built RESTful APIs to handle order processing, inventory management, user authentication, and data retrieval.",
            "Optimized API performance and reduced response times with efficient database queries and caching strategies."
        ],
        image: goldImage
    },
    {
        title: "Find my Browser-Bookmarks-Keeper",
        duration: "Jun 2022 – Jul 2022",
        shortDescription:
            "Linux-based bookmarks keeper using shell script for efficient command-line management and retrieval.",
        details: [
            "Created a shell script to manage and retrieve browser bookmarks efficiently on Linux systems.",
            "Enabled streamlined web navigation by organizing bookmarks directly from the command line.",
            "Improved productivity with quick access to stored bookmarks and enhanced organization."
        ],
        image: bookmarksImage
    },
    {
        title: "Weather API Web Application",
        duration: "Jan 2022 – Mar 2022",
        shortDescription:
            "A real-time weather web app using Spring Boot, REST APIs, SQL, and MongoDB with a dynamic UI.",
        details: [
            "Built REST APIs to fetch real-time weather data and display it through a responsive UI.",
            "Integrated SQL and MongoDB for efficient storage and retrieval of search history and weather data.",
            "Implemented recent search tracking and enhanced user interaction with clean UI design."
        ],
        image: weatherImage
    },
    {
        title: "Face Recognition to Detect Criminals",
        duration: "Jul 2019 – Aug 2020",
        shortDescription:
            "Real-time face detection and recognition using MTCNN and FaceNet with a criminal database.",
        details: [
            "Utilized MTCNN for accurate face detection and alignment, ensuring precise input for facial recognition.",
            "Compared real-time face embeddings with a criminal database to identify individuals.",
            "Achieved high accuracy (95%) in real-world test scenarios, enhancing public safety mechanisms."
        ],
        image: faceImage
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openPopup = (project) => setSelectedProject(project);
    const closePopup = () => setSelectedProject(null);

    return (
        <section id="projects" className="py-20 bg-[#0a192f] text-center px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Projects</h2>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        onClick={() => openPopup(project)}
                        className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer
              transition-transform duration-300 hover:scale-105 focus:scale-105 active:scale-105
              hover:shadow-[0_0_20px_rgba(100,255,218,0.6)] focus:shadow-[0_0_20px_rgba(100,255,218,0.6)] active:shadow-[0_0_20px_rgba(100,255,218,0.6)]"
                    >
                        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded mb-4"
                        />
                        <p className="text-sm text-gray-400">{project.duration}</p>
                        <p className="text-gray-300 mt-2">{project.shortDescription}</p>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
                    onClick={closePopup}
                >
                    <div
                        className="bg-[#112240] p-6 rounded-lg max-w-lg w-full shadow-lg text-left text-white relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold text-[#64ffda] mb-4">
                            {selectedProject.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            {selectedProject.duration}
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                            {selectedProject.details.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
