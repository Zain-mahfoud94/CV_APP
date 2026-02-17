import Nav from "../components/Nav.tsx";
import foto from "../imgs/foto.png";
import AnimatedSection from "../components/AnimatedSection";
import SkillBar from "../components/SkillBar.tsx";
import ElectricBorder from "../components/ElectricBorder.tsx";
import LiveDemoCards from "../components/LiveDemoCards";
import { useState } from "react";

const HomeEN = () => {
  const currentYear = new Date().getFullYear();

  const colors = {
    best: "#22c55e",
    normal: "#eab308",
    basic: "#ef4444",
  };

  const [currentThemeState, setCurrentThemeState] = useState("");

  interface ChangeEvent {
    target: HTMLInputElement;
  }

  const handleChange = (e: ChangeEvent): void => {
    const target = e.target;
    const value: boolean =
      target.type === "checkbox" ? target.checked : Boolean(target.value);
    setCurrentThemeState(value ? "luxury" : "nord");
    console.log("Theme changed to:", value ? "luxury" : "nord");
  };

  const skills = [
    { id: 1, name: "HTML", value: 100, color: colors.best },
    { id: 2, name: "CSS / Tailwind CSS", value: 100, color: colors.best },
    { id: 3, name: "JavaScript", value: 100, color: colors.best },
    { id: 4, name: "Git", value: 100, color: colors.best },
    { id: 5, name: "Python", value: 80, color: colors.best },
    { id: 6, name: "AI / ML", value: 80, color: colors.best },
    { id: 7, name: "Android / Java", value: 70, color: colors.normal },
    { id: 8, name: "React", value: 70, color: colors.normal },
    { id: 9, name: "Node.js", value: 70, color: colors.normal },
    { id: 10, name: "Express.js", value: 70, color: colors.normal },
    { id: 11, name: "Docker", value: 50, color: colors.basic },
  ];

  return (
    <div className="flex flex-col gap-10">
      <Nav
        page_name={"Curriculum Vitae"}
        home={"Home"}
        about={"About"}
        skills={"Skills"}
        experience={"Experience"}
        education={"Education"}
        contact={"Contact"}
        navTo={"/"}
        lang={"DE"}
        currentPage={"/en"}
        handleChange={handleChange}
      />
      <section id="home" className="w-11/12 flex flex-row mx-auto pt-5 pb-5">
        <div className="basis-2/3 justify-center flex flex-col items-center px-10 gap-4">
          <h2 className="text-5xl mb-2 font-semibold text-center">
            Hello, I am{" "}
            <span className="font-bold bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Zain Alabdeen Mahfoud
            </span>
          </h2>
          <p className="text-xl bg-base-900 mb-2 rounded-lg text-center p-2">
            Software developer with expertise in web design and development,
            automation, artificial intelligence, and machine learning. I am
            passionate about solving real-world problems, exploring new
            technologies, and developing innovative solutions that have a
            meaningful impact.
          </p>
          <a
            href="mailto:zain.mah@hotmail.com"
            className="w-22 h-8 text-center p-0.5 m-0.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className=" basis-1/3 avatar flex items-center justify-center">
          <div className="ring-primary ring-offset-base-100 w-72 rounded-full ring-2 ring-offset-2">
            <img src={foto} alt="Profile" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        <h3 className="text-center text-5xl ">
          <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            About Me
          </span>
        </h3>
        <p className="text-xl bg-base-900 mb-2 p-4 rounded-lg text-center">
          I am a dedicated, goal-oriented, and curious person. I am enthusiastic
          about learning new things and developing myself further. My friendly
          and open nature has always helped me to fit in easily with teams of
          people from different cultures. My greatest strengths include
          teamwork, adaptability, and empathy.
        </p>
      </section>
      <section
        id="skills-section"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= SKILLS ================= */}
        <AnimatedSection className="py-20 bg-base-300 rounded-4xl" id="skills">
          <h3 className="text-4xl font-bold mb-10 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Skills & Knowledge
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 w-4/5 mx-auto">
            {skills.map((skill) => (
              <SkillBar
                key={skill.id}
                label={skill.name}
                percent={skill.value}
                color={skill.color}
              />
            ))}
          </div>
        </AnimatedSection>
      </section>
      <section
        id="experience-section"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= Experience ================= */}
        <AnimatedSection
          className="py-20 bg-base-300 rounded-4xl"
          id="experience"
        >
          <h3 className="text-3xl font-bold mb-5 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Work Experience
            </span>
          </h3>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card w-4/5 mx-auto mb-10 rounded-3xl">
                <div className="card-body">
                  <h4 className="card-title justify-center text-xl font-bold">
                    LMS Integration Engineer - Mynd GmbH - Frankfurt am Main -
                    Germany
                  </h4>
                  <p className="opacity-80 text-lg  text  mb-0.5">
                    Mar. 2025 - Feb. 2026
                  </p>
                  <ul>
                    <li className="text-lg">
                      Development of customized code solutions for the company's
                      proprietary learning management system (LMS) and internal
                      applications
                    </li>
                    <li className="text-lg">
                      Implementation of front-end and back-end functions with
                      HTML, CSS, JavaScript, and JavaScript libraries (e.g.,
                      Express.js and Node.js)
                    </li>
                    <li className="text-lg">
                      Database design and management with MySQL or PostgreSQL
                    </li>
                    <li className="text-lg">
                      Deployment and server management with Nginx, PM2, and
                      Docker
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card w-4/5 mx-auto mb-10 rounded-3xl">
                <div className="card-body">
                  <h4 className="card-title justify-center text-xl font-bold">
                    Student Job - BackWerk - Kassel - Germany
                  </h4>
                  <p className="opacity-80 text-lg  text  mb-0.5">
                    Nov. 2020 - Feb. 2025
                  </p>
                  <ul>
                    <li className="text-lg">
                      Supporting the sales team and customer service
                    </li>
                    <li className="text-lg">
                      Responsibility for product presentation and maintenance of
                      the sales area
                    </li>
                    <li className="text-lg">
                      Further development of communication and organizational
                      skills
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card w-4/5 mx-auto mb-10 rounded-3xl">
                <div className="card-body">
                  <h4 className="card-title justify-center text-xl font-bold">
                    Freelancer Android developer - StoreXweb - Bologna - Italy
                  </h4>
                  <p className="opacity-80 text-lg  text  mb-0.5">
                    Jun. 2017 - Aug. 2018
                  </p>
                  <ul>
                    <li className="text-lg">
                      Development and maintenance of various Android
                      applications using modern technologies such as barcode
                      scanning, digital signatures, offline data storage, and
                      server communication
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card-body">
                <h4 className="card-title justify-center text-xl font-bold mb-1">
                  Android developer - Smart Source Group - Lattakia - Syria
                </h4>
                <p className="opacity-80 text-lg  text  mb-0.5">
                  May. 2016 - Aug. 2017
                </p>
                <ul>
                  <li className="text-lg">
                    Development of user-friendly Android apps for scheduling and
                    data storage with a focus on appealing UX/UI designs
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card-body">
                <h4 className="card-title justify-center text-xl font-bold mb-1">
                  Android developer - Prime Technologies s.r.o. - Lattakia -
                  Syria
                </h4>
                <p className="opacity-80 text-lg text  mb-0.5">
                  May 2015 - Jun. 2017
                </p>
                <ul>
                  <li className="text-lg">
                    Collaboration on a search engine app with APIs,
                    object-oriented programming (OOP), design patterns, and
                    authorization management
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
        </AnimatedSection>
      </section>

      <section
        id="education-section"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= EDUCATION ================= */}
        <AnimatedSection
          className="py-20 bg-base-300 rounded-4xl"
          id="education"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Academic education
            </span>
          </h3>
          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card-body">
                <h4 className="card-title justify-center text-2xl font-bold mb-1">
                  Electrical Engineering/Computer Science - Kassel University -
                  Kassel - Germany
                </h4>
                <p className="opacity-80 text-xl text mb-0.5">
                  Oct. 2020 - May. 2024
                </p>
                <ul>
                  <li className="text-xl">
                    <span className="font-bold text-xl">Degree: </span> Master
                    of Science, grade 2.2
                  </li>
                  <li className="text-xl">
                    <span className="font-bold text-xl">Focus: </span>
                    Computational Intelligence & Data Analytics
                  </li>
                  <li className="text-xl">
                    <span className="font-bold text-xl">
                      Master's thesis topic:{" "}
                    </span>
                    Anomaly detection in the latent space of variational
                    autoencoders (submission date: May 14, 2024)
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>

          <div className="m-10 hover:scale-105 transition-transform duration-300">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card-body">
                <h4 className="card-title justify-center text-2xl font-bold mb-1">
                  Faculty of Computer Engineering - Tishreen University -
                  Latakia - Syria
                </h4>
                <p className="opacity-80 text-xl text mb-0.5">
                  Oct. 2012 - Dec. 2017
                </p>
                <ul>
                  <li className="text-xl">
                    <span className="font-bold text-xl">Degree: </span>Bachelor
                    of Science in Computer Science, grade 78.98%
                  </li>
                  <li className="text-xl">
                    <span className="font-bold text-xl">Focus: </span>Software
                    Engineering and information systems technology
                  </li>
                  <li className="text-xl">
                    <span className="font-bold text-xl">
                      Bachelor thesis topic:
                    </span>
                    Drawing images using deep learning (submission date: July
                    10, 2017)
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>

          <div className="m-10 hover:scale-105 transition-transform duration-3000">
            <ElectricBorder
              color={currentThemeState === "luxury" ? "#7df9ff" : "#7df9ff"}
              speed={1}
              chaos={0.25}
              style={{
                backgroundColor:
                  currentThemeState === "luxury" ? "#060010" : "#060010",
                color: currentThemeState === "luxury" ? "#dca54d" : "#fff",
                borderRadius: 16,
                width: "80%",
                margin: "0 auto",
                padding: 12,
              }}
            >
              <div className="card-body">
                <h4 className="card-title justify-center text-2xl font-bold mb-1">
                  High school - Al Thawra School - Latakia - Syria
                </h4>
                <p className="opacity-80 text-xl text mb-0.5">
                  Sep. 2009 - Jun. 2012
                </p>
                <ul>
                  <li className="text-xl">
                    High school diploma in science, grade 91.25%
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
        </AnimatedSection>
      </section>

      <section
        id="Portfolio-section"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= Portfolio ================= */}
        <AnimatedSection
          className="py-20 bg-base-300 rounded-4xl"
          id="portfolio"
        >
          <h3 className="text-3xl font-bold mb-10  text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Portfolio
            </span>
          </h3>

          <LiveDemoCards language="EN" />
        </AnimatedSection>
      </section>

      <section
        id="contact-section"
        className="w-11/12 flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= CONTACT ================= */}
        <AnimatedSection className="py-5 bg-base-300 rounded-4xl" id="contact">
          <h3 className="text-5xl mb-4">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Contact Me
            </span>
          </h3>
          <h3 className="text-2xl mb-5">You can reach me at:</h3>
          <a
            href="mailto:zain.mah@hotmail.com"
            className="inline-block text-xl font-semibold text-blue-500 hover:underline"
          >
            zain.mah@hotmail.com
          </a>
        </AnimatedSection>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {currentYear} Zain Alabdeen Mahfoud. All Rights
            Reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default HomeEN;
