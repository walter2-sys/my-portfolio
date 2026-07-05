import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        My Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

    </main>
  );
}