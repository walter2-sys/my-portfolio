import Link from "next/link";
import Terminal from "@/components/Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center max-w-5xl mx-auto px-6">

      <div className="flex-1 flex flex-col justify-center">
        <p className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">
          Portfolio
        </p>

        <h1 className="font-display font-black leading-none tracking-tight text-zinc-950 mb-6" style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}>
          Taha.  
        </h1>

        <div className="flex flex-col gap-1 mb-10">
          <span className="font-display italic text-zinc-400" style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>Code. Models. Exploits.</span>
          <span className="font-display font-bold text-zinc-950" style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>I speak all three.</span>
        </div>

        <div className="flex gap-4">
          <Link href="/projects" className="font-body text-sm font-medium bg-zinc-950 text-white px-6 py-3 hover:bg-zinc-700 transition-colors">
            View Projects
          </Link>
          <Link href="/about" className="font-body text-sm font-medium border border-zinc-300 text-zinc-700 px-6 py-3 hover:border-zinc-950 hover:text-zinc-950 transition-colors">
            About Me
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-end">
          <Terminal />
      </div>

    </section>
  );
}