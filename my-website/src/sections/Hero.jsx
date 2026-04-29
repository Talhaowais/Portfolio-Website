import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            {profile.role}
          </p>

          <p className="mt-2 text-gray-500">
            {profile.tagline}
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <Button>View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}