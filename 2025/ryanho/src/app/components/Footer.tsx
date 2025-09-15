export default function Footer() {
  return (
    <footer className="flex justify-between items-center text-base">
      <div>Currently: Ithaca</div>
      <div className="flex space-x-7">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          Resume
        </a>
        <a
          href="https://linkedin.com/in/rh564"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/ryanisho/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
