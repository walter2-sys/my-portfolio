type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
};

export default function ProjectCard({ project } : {project: Project}) {
    return (
        <div className="border rounded p-6 hover:shadow-md transition">

            <h2 className="text-xl font-bold">{project.title}</h2>

            <p className="text-gray-600 mt-2">{project.description}</p>

            <div className="flex gap-2 mt-4 flex-wrap">
                {project.tech.map((t, i) => (
                    <span
                        key={i}
                        className="text-xs border px-2 py-1 rounded"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-blue-600 hover:underline"
            >
                View Project →
            </a>

        </div>
    );
}