import * as SiIcons from "react-icons/si";

const skillsRow1 = [
  { name: "React", icon: "SiReact" },
  { name: "Angular", icon: "SiAngular" },
  { name: "Ionic", icon: "SiIonic" },
  { name: "Vite", icon: "SiVite" },
  { name: "HTML5", icon: "SiHtml5" },
  { name: "CSS3", icon: "SiCss3" },
  { name: "JavaScript", icon: "SiJavascript" }
];

const skillsRow2 = [
  { name: "Node.js", icon: "SiNodeDotJs" },
  { name: "Express", icon: "SiExpress" },
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "Firebase", icon: "SiFirebase" },
  { name: "Golang", icon: "SiGoland" },
  { name: "Python", icon: "SiPython" },
  { name: "C++", icon: "SiCplusplus" }
];

function MarqueeRow({ skills, reverse }) {
  // Duplicamos los skills para hacer bucle infinito visual
  const IconComponent = (icon) => SiIcons[icon] ? SiIcons[icon] : null;

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-2">
      <div
        className={`flex gap-8 animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}
        style={{
          animationDuration: "24s", // Ajusta la velocidad aquí
        }}
      >
        {[...skills, ...skills].map((skill, idx) => (
          <div key={idx} className="inline-flex flex-col items-center justify-center min-w-[90px]">
            <span className="text-4xl text-[#B5E7F7] mb-1">
              {IconComponent(skill.icon) && React.createElement(IconComponent(skill.icon), { size: 38 })}
            </span>
            <span className="text-xs text-[#EA8CFF] font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
