import Navbar from "./assets/components/Navbar";

export default function App() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_#282047_0%,_#1B1531_80%,_#21152b_100%)] min-h-screen pt-20 font-body">
      <Navbar />

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-28 px-4">
        <h1 className="font-title text-5xl font-extrabold text-[#B5E7F7] mb-2">
          About Me
        </h1>
        <h2 className="font-title text-2xl font-semibold text-[#E6D6FF] mb-6">
          Web Developer & Quantum Enthusiast
        </h2>
        <p className="text-lg text-[#f5f5fa] mb-3">
          Hi, I’m Nazar Blanco, passionate about merging art, science, and technology.
        </p>
        <p className="text-base text-[#E6D6FF]">
          My focus: building modern, interactive web experiences with a creative and scientific edge.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-[#EA8CFF] text-[#21152b] font-title font-bold px-7 py-3 rounded-xl text-lg shadow-md hover:bg-[#B5E7F7] hover:text-[#1B1531] transition"
        >
          Contact Me
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-3xl mx-auto py-24 px-4">
        <h2 className="font-title text-4xl font-bold text-[#B5E7F7] mb-3">
          Skills
        </h2>
        <h3 className="font-title text-xl text-[#E6D6FF] mb-4">
          What I love to work with
        </h3>
        <ul className="grid grid-cols-2 gap-4 text-[#f5f5fa]">
          <li>React / Next.js</li>
          <li>Quantum Computing</li>
          <li>Node.js / Firebase</li>
          <li>UI/UX & Animation</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-24 px-4">
        <h2 className="font-title text-4xl font-bold text-[#B5E7F7] mb-8">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl p-6 bg-[#4c4270] shadow-lg border border-[#B3A3D9]">
            <h3 className="font-title text-2xl font-bold text-[#B5E7F7]">
              Qonverse
            </h3>
            <p className="text-[#E6D6FF] mb-3">
              AI-powered conversation simulator with React & Firebase.
            </p>
            <a
              href="#"
              className="inline-block text-[#1B1531] bg-[#E6D6FF] font-title font-bold px-4 py-2 rounded-lg hover:bg-[#99ECFF] hover:text-[#282047] transition"
            >
              View Project
            </a>
          </div>
          {/* Puedes añadir más proyectos aquí */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto py-24 px-4">
        <h2 className="font-title text-4xl font-bold text-[#B5E7F7] mb-6">
          Contact
        </h2>
        <form className="flex flex-col gap-4 bg-[#282047] p-6 rounded-xl border border-[#B3A3D9]">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-[#4c4270] text-[#f5f5fa] placeholder-[#E6D6FF]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-[#4c4270] text-[#f5f5fa] placeholder-[#E6D6FF]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-[#4c4270] text-[#f5f5fa] placeholder-[#E6D6FF]"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#EA8CFF] text-[#21152b] font-title font-bold px-4 py-2 rounded-lg hover:bg-[#B5E7F7] hover:text-[#1B1531] transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
