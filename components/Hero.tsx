export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">
        Full-Stack Developer
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        I build scalable web apps using React + Next.js and modern backend tools.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/projects" className="px-4 py-2 bg-black text-white rounded">
          View Projects
        </a>
        <a href="/contact" className="px-4 py-2 border rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
}