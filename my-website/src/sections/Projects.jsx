import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="Things I’ve built"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <h3 className="font-bold text-xl">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border border-gray-700 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}