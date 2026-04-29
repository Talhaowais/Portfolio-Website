import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div className="grid md:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <h3 className="font-bold mb-3 capitalize">
                {category}
              </h3>

              <ul className="space-y-1 text-gray-300">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}