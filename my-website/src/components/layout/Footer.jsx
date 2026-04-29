import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <Container>
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Talha</p>
        </div>
      </Container>
    </footer>
  );
}