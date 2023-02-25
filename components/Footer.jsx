import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <Container extraClasses="py-10">
        <p className="text-center">
          Made with 💖 by{" "}
          <a
            href="https://linkedin.com/in/william-tsikata"
            rel="noreferrer"
            target="_blank"
          >
            🔗 William M. Tsikata
          </a>
        </p>
      </Container>
    </footer>
  );
};
