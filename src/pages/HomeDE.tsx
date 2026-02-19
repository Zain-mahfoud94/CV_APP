import Nav from "../components/Nav.tsx";
import foto from "../imgs/foto.png";
import AnimatedSection from "../components/AnimatedSection";
import SkillBar from "../components/SkillBar.tsx";
import ElectricBorder from "../components/ElectricBorder.tsx";
import LiveDemoCards from "../components/LiveDemoCards";
import { useState } from "react";

const HomeDE = () => {
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
        page_name={"Lebenslauf"}
        home={"Startseite"}
        about={"Über"}
        skills={"Fähigkeiten"}
        experience={"Erfahrung"}
        education={"Bildung"}
        contact={"Kontakt"}
        navTo={"/en"}
        lang={"EN"}
        currentPage={"/"}
        handleChange={handleChange}
      />
      <section
        id="home"
        className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-10  sm:gap-4 mx-auto"
      >
        <div className="flex flex-col items-center px-10 gap-4">
          <h2 className="text-5xl mb-2 font-semibold text-center">
            Hallo, ich bin{" "}
            <span className="font-bold bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Zain Alabdeen Mahfoud
            </span>
          </h2>
          <p className="text-xl bg-base-900 mb-2 rounded-lg text-center p-2">
            Softwareentwickler mit Fachkenntnissen in den Bereichen Webdesign
            und -entwicklung, Automatisierung, künstliche Intelligenz und
            maschinelles Lernen. Ich bin begeistert davon, reale Probleme zu
            lösen, neue Technologien zu erforschen und innovative Lösungen zu
            entwickeln, die einen bedeutenden Einfluss haben.
          </p>
          <a
            href="mailto:zain.mah@hotmail.com"
            className="w-22 h-8 text-center p-0.5 m-0.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
          >
            Kontakt
          </a>
        </div>
        <div className="avatar flex items-center justify-center">
          <div className="ring-primary ring-offset-base-100 w-72 rounded-full ring-2 ring-offset-2">
            <img src={foto} alt="Profile" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
      >
        <h3 className="text-center text-5xl ">
          <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            Über mich
          </span>
        </h3>
        <p className="text-xl bg-base-900 mb-2 p-4 rounded-lg text-center">
          Ich bin eine engagierte, zielorientierte und neugierige Person. Ich
          bin begeistert davon, neue Dinge zu lernen und mich
          weiterzuentwickeln. Dank meiner freundlichen und offenen Art habe ich
          mich immer leicht in Teams mit Menschen aus verschiedenen Kulturen
          integriert. Zu meinen größten Stärken zählen Teamfähigkeit,
          Anpassungsfähigkeit und Empathie.
        </p>
      </section>
      <section
        id="skills-section"
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= SKILLS ================= */}
        <AnimatedSection className="py-20 bg-base-300 rounded-4xl" id="skills">
          <h3 className="text-4xl font-bold mb-10 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Fähigkeiten und Kenntnisse
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
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= Experience ================= */}
        <AnimatedSection
          className="py-20 bg-base-300 rounded-4xl"
          id="experience"
        >
          <h3 className="text-3xl font-bold mb-5 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Berufserfahrung
            </span>
          </h3>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                  <h4 className="card-title justify-center font-bold">
                    LMS-Integrationsingenieur – Mynd GmbH – Frankfurt am Main –
                    Deutschland
                  </h4>
                  <p className="opacity-80 mb-0.5">Mar. 2025 - Feb. 2026</p>
                  <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                  <ul>
                    <li className="text-base">
                      Entwicklung maßgeschneiderter Codelösungen für das
                      firmeneigene Lernmanagement-system (LMS) und interne
                      Anwendungen
                    </li>
                    <li className="text-base">
                      Implementierung von Frontend- und Backend-Funktionen mit
                      HTML, CSS, JavaScript und JavaScript-Bibliotheken (z. B.
                      Express.js und Node.js)
                    </li>
                    <li className="text-base">
                      Datenbankdesign und -verwaltung mit MySQL oder PostgreSQL
                    </li>
                    <li className="text-base">
                      Bereitstellung und Serververwaltung mit Nginx, PM2 und
                      Docker
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                  <h4 className="card-title justify-center font-bold">
                    Studentenjob – BackWerk – Kassel – Deutschland
                  </h4>
                  <p className="opacity-80  mb-0.5">Nov. 2020 - Feb. 2025</p>
                  <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                  <ul>
                    <li className="text-base">
                      Unterstützung des Verkaufsteams und der Kundenservice
                    </li>
                    <li className="text-base">
                      Verantwortung für Produktpräsentation und Wartung des
                      Verkaufsraums
                    </li>
                    <li className="text-base">
                      Weiterentwicklung von Kommunikations- und
                      Organisationsfähigkeiten
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                  <h4 className="card-title justify-center font-bold">
                    Freiberuflicher Android-Entwickler – StoreXweb – Bologna –
                    Italien
                  </h4>
                  <p className="opacity-80 mb-0.5">Jun. 2017 - Aug. 2018</p>
                  <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                  <ul>
                    <li className="text-base">
                      Entwicklung und Wartung verschiedener Android-Anwendungen
                      unter Verwendung moderner Technologien wie
                      Barcode-Scanning, digitale Signaturen,
                      Offline-Datenspeicherung und Serverkommunikation
                    </li>
                  </ul>
                </div>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                <h4 className="card-title justify-center font-bold mb-1">
                  Android-Entwickler – Smart Source Group – Latakia – Syrien
                </h4>
                <p className="opacity-80  mb-0.5">May. 2016 - Aug. 2017</p>
                <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                <ul>
                  <li className="text-base">
                    Entwicklung benutzerfreundlicher Android-Apps für die
                    Terminplanung und Datenspeicherung mit Schwerpunkt auf
                    ansprechenden UX/UI-Designs, Fehlerbehebung und
                    kontinuierlicher Verbesserung
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                <h4 className="card-title justify-center font-bold mb-1">
                  Android-Entwickler – Prime Technologies s.r.o. – Latakia –
                  Syrien
                </h4>
                <p className="opacity-80 mb-0.5">May 2015 - Jun. 2017</p>
                <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                <ul>
                  <li className="text-base">
                    Zusammenarbeit an einer Suchmaschinen-App mit APIs,
                    objektorientierter Programmierung (OOP), Designmustern und
                    Autorisierungsmanagement
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
        </AnimatedSection>
      </section>

      <section
        id="education-section"
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= EDUCATION ================= */}
        <AnimatedSection
          className="py-20 bg-base-300 rounded-4xl"
          id="education"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Akademische Ausbildung
            </span>
          </h3>
          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                <h4 className="card-title justify-center font-bold mb-1">
                  Elektrotechnik / Informatik – Universität Kassel – Kassel –
                  Deutschland
                </h4>
                <p className="opacity-80 mb-0.5">Oct. 2020 - May. 2024</p>
                <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                <ul>
                  <li className="text-base">
                    <span className="font-bold">Abschluss: </span> Master of
                    Science, Note 2,2
                  </li>
                  <li className="text-base">
                    <span className="font-bold">Fokus: </span>
                    Computational Intelligence & Data Analytics
                  </li>
                  <li className="text-base">
                    <span className="font-bold">Thema der Masterarbeit: </span>
                    Anomalieerkennung im latenten Raum von variationalen
                    Autoencodern (Einreichungsdatum: 14. Mai 2024)
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>

          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                <h4 className="card-title justify-center font-bold mb-1">
                  Fakultät für Computertechnik – Tishreen-Universität – Latakia
                  – Syrien
                </h4>
                <p className="opacity-80 mb-0.5">Oct. 2012 - Dec. 2017</p>
                <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                <ul>
                  <li className="text-base">
                    <span className="font-bold">Abschluss: </span>
                    Bachelor of Science in Informatik, Note 78,98 %
                  </li>
                  <li className="text-base">
                    <span className="font-bold">Fokus: </span>
                    Softwareentwicklung und Informationstechnologie
                  </li>
                  <li className="text-base">
                    <span className="font-bold">Thema der Bachelorarbeit:</span>
                    Drawing images using deep learning (Einreichungsdatum: 10.
                    Juli 2017)
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>

          <div className="m-10 hover:scale-105 transition-transform duration-200">
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
                <h4 className="card-title justify-center font-bold mb-1">
                  Gymnasium – Al Thawra Schule – Latakia – Syrien
                </h4>
                <p className="opacity-80 mb-0.5">Sep. 2009 - Jun. 2012</p>
                <hr className="border-t border-gray-300 dark:border-gray-600 my-2" />
                <ul>
                  <li className="text-base">
                    Abitur in Naturwissenschaften, Note 91,25 %
                  </li>
                </ul>
              </div>
            </ElectricBorder>
          </div>
        </AnimatedSection>
      </section>

      <section
        id="Portfolio-section"
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
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

          <LiveDemoCards language="DE" />
        </AnimatedSection>
      </section>

      <section
        id="contact-section"
        className="w-full flex flex-col p-5 gap-2 text-center mx-auto"
      >
        {/* ================= CONTACT ================= */}
        <AnimatedSection className="py-5 bg-base-300 rounded-4xl" id="contact">
          <h3 className="text-5xl mb-4">
            <span className="bg-linear-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Kontaktieren Sie mich
            </span>
          </h3>
          <h3 className="text-2xl mb-5">Sie erreichen mich unter:</h3>
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
            Urheberrecht © {currentYear} Zain Alabdeen Mahfoud. Alle Rechte
            vorbehalten.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default HomeDE;
