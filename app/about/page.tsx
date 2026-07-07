"use client";

import Reveal from "@/components/Reveal";

export default function About() {

  const domains = [
    "AI Engineering", 
    "Full-Stack Development",
    "Machine Learning", 
    "Data Science", 
    "Cybersecurity", 
    "Network Security", 
    "Cloud Infrastructure",
    "Mobile Application Development",
  ];

  const skillGroups = [
    {
      category: "Languages",
      items: ["Python", "Java", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },

    {
      category: "Frameworks & Tools",
      items: ["React", "Next.JS", "Node.JS", "Express.JS", "C#", "ASP.NET"]
    },

    {
      category: "Data & ML",
      items: ["Numpy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "MySQL", "NoSQL"]
    },

    {
      category: "Cloud",
      items: ["AWS"]
    },

    {
      category: "Security",
      items: ["WireShark", "OWASP Top 10", "Nmap", "Metasploit", "Burpsuite", "Splunk", "John the Ripper", "Hashcat", "Maltego", "YARA"]
    }
  ];

  return (

    <main className="max-w-3xl px-6 py-12 space-y-16">

      <div className="pb-16 mb-16 border-b border-zinc-200">
        <Reveal>
          <p className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">
            About
          </p>
        </Reveal>

        <Reveal>
          <h1 className="font-display font-black leading-none tracking-tight text-zinc-950 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
            Who I am.
          </h1>
        </Reveal>

        <Reveal>
          <p className="font-display italic text-zinc-400 text-xl">
            Engineer. Builder. Still figuring it out — on purpose.
          </p>
        </Reveal>
      </div>
      
      <section>
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 whitespace-nowrap">
              Who I Am
            </span>
            <span className="flex-1 h-px bg-zinc-200" />
          </div>
        </Reveal>

        <Reveal>
          <p className="font-display italic text-zinc-950 max-w-xl mb-4" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.6 }}>
            IT graduate. Deep in AI & Cybersecurity.
          </p>
        </Reveal>

        <Reveal>
          <p className="font-body text-base font-light leading-8 text-zinc-500 max-w-xl mb-4">
            I build full-stack applications, design systems, and study the mathematics 
            behind machine learning — not for grades, but because the field demands it.
          </p>
        </Reveal>

        <Reveal>
          <p className="font-body text-base font-light leading-8 text-zinc-500 max-w-xl">
            My work sits at the intersection of software engineering, intelligent systems, 
            and security. I care about building things that are fast, robust, and hard to break.
          </p>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 whitespace-nowrap">
              Domains
            </span>
            <span className="flex-1 h-px bg-zinc-200" />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200 mt-4">
            {domains.map((domain) => (
              <span key={domain} className="font-body text-sm text-zinc-600 py-3">
                {domain}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 whitespace-nowrap">
              Skills
            </span>
            <span className="flex-1 h-px bg-zinc-200" />
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-6 mt-4">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-3">
                  {group.category}
                </h3>

              <div className="flex gap-2 flex-wrap">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                    border 
                    border-zinc-300 
                    rounded-full 
                    px-4 
                    py-1.5 
                    text-zinc-700 
                    text-sm
                    transition-all
                    duration-200
                    hover:cursor-pointer
                    hover:bg-zinc-900
                    hover:border-zinc-900
                    hover:text-white
                    "
                  >
                    {skill}
                  </span>
                  ))}
              </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 whitespace-nowrap">
              Fun Fact
            </span>
            <span className="flex-1 h-px bg-zinc-200" />
          </div>
        </Reveal>

        <Reveal>
          <p className="font-display italic text-zinc-950" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', lineHeight: 1.6 }}>
            I failed high school math. Now I'm studying the calculus and linear algebra that powers neural networks —
          </p>
          <p className="font-display font-black text-zinc-950 mt-2" style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
            voluntarily.
          </p>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 whitespace-nowrap">
              Resumes
            </span>
            <span className="flex-1 h-px bg-zinc-200" />
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200">
          <a href="/resumes/SWE_EngineeringResume.pdf" target="_blank" className="flex items-center justify-between py-6 group">
            <div>
              <p className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-1">Software Engineering</p>
              <p className="font-display text-zinc-950 text-lg">SWE Resume</p>
            </div>
            <span className="font-body text-zinc-400 group-hover:text-zinc-950 transition-colors text-sm">Download →</span>
          </a>

          <a href="/resumes/ML_EngineeringResume.pdf" target="_blank" className="flex items-center justify-between py-6 group">
            <div>
              <p className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-1">AI Engineering</p>
              <p className="font-display text-zinc-950 text-lg">AI / ML Resume</p>
            </div>
            <span className="font-body text-zinc-400 group-hover:text-zinc-950 transition-colors text-sm">Download →</span>
          </a>
        </div>
      </section>
    </main>
  );
}