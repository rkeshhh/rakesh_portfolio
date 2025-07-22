import React, { useState } from "react";
import verizonLogo from "../assets/images/verizon.png";
import amazonLogo from "../assets/images/Amazon.jpg";
import freelancerLogo from "../assets/images/Freelancer.webp";
import infraBimLogo from "../assets/images/InfraBIM.png";
import wiproLogo from "../assets/images/Wipro.png";

const experiences = [
  {
    company: "Verizon, Hyderabad",
    role: "Software Development Engineer II",
    duration: "Jul 2025 – Present",
    shortDescription: "Spring Reactive, REST APIs, RBAC, and backend microservices for scalability.",
    details: [
      "Working on Spring Reactive and REST API development for high-performance backend services.",
      "Designing and implementing RBAC (Role-Based Access Control) for secure access.",
      "Performing API testing using Postman to validate endpoints and workflows.",
      "Enhancing backend microservices for scalability and reliability.",
      "Collaborating with teams for CI/CD deployments and maintainable code."
    ],
    logo: verizonLogo
  },
  {
    company: "Amazon, Hyderabad",
    role: "Quality Associate",
    duration: "Oct 2023 – Present",
    shortDescription: "Salesforce CRM testing, Selenium automation, and Postman API testing.",
    details: [
      "Worked on Salesforce Lightning CRM for leads, contacts, and service requests.",
      "Performed manual and automation testing using Selenium and TestNG.",
      "Used Postman for API validation and JIRA for bug reporting and sprint tracking.",
      "Implemented dropdown testing, form validation, and package tracking workflows."
    ],
    logo: amazonLogo
  },
  {
    company: "Freelancer, Remote",
    role: "Backend Developer",
    duration: "Jul 2023 – Sep 2023",
    shortDescription: "Developed REST APIs and RBAC for gold business automation using Spring Boot.",
    details: [
      "Developed secure RESTful APIs using Spring Boot.",
      "Implemented role-based access (RBAC) for different user roles.",
      "Integrated Spring Security for authentication and data integrity."
    ],
    logo: freelancerLogo
  },
  {
    company: "InfraBIM Techno Solutions, Remote",
    role: "Data Science Intern",
    duration: "Apr 2023 – May 2023",
    shortDescription: "Data analysis, visualization, and dashboard creation using Python.",
    details: [
      "Contributed to the 'Open Data - Telangana' project.",
      "Performed data cleaning, analysis, and visualization using Python, Matplotlib, and Seaborn."
    ],
    logo: infraBimLogo
  },
  {
    company: "Wipro, Hyderabad",
    role: "Full Stack Developer",
    duration: "Jan 2022 – Jan 2023",
    shortDescription: "Backend development with Spring Boot, REST APIs, and MySQL.",
    details: [
      "Built a robust backend using Spring Boot and MySQL.",
      "Developed REST APIs to enable seamless frontend-backend communication.",
      "Integrated a responsive UI using Bootstrap and JavaScript."
    ],
    logo: wiproLogo
  }
];

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openPopup = (experience) => setSelectedExperience(experience);
  const closePopup = () => setSelectedExperience(null);

  return (
      <section id="experience" className="py-20 px-8 bg-[#0a192f] text-center">
        <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Experience</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
              <div
                  key={i}
                  onClick={() => openPopup(exp)}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer
                       transition-transform duration-300 hover:scale-105
                       hover:shadow-[0_0_25px_rgba(100,255,218,0.6)]"
              >
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="text-gray-300">{exp.shortDescription}</p>
              </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedExperience && (
            <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                onClick={closePopup}
            >
              <div
                  className="bg-[#0d1b2a] border border-[#64ffda]/40 rounded-xl p-6 max-w-xl w-full shadow-lg text-left text-white relative"
                  onClick={(e) => e.stopPropagation()}
              >
                {/* Header (Logo + Role) */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                      src={selectedExperience.logo}
                      alt="Logo"
                      className="w-14 h-14 object-contain"
                  />
                  <h3 className="text-2xl font-bold text-[#64ffda]">
                    {selectedExperience.role}
                  </h3>
                </div>

                {/* Duration */}
                <p className="text-gray-300 text-lg mb-4">
                  {selectedExperience.duration}
                </p>

                {/* Details */}
                <ul className="space-y-3">
                  {selectedExperience.details.map((point, index) => (
                      <li key={index} className="relative pl-6 text-gray-300">
                        <span className="absolute left-0 text-[#64ffda]">•</span>
                        {point}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
        )}
      </section>
  );
}

export default Experience;
