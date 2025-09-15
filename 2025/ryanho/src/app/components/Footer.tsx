export default function Footer() {
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-center text-base space-y-4 md:space-y-0 pt-10 sm:pt-0 md:pt-0">
      <div className="hidden md:block">Currently: Ithaca</div>
      <div className="flex flex-col md:flex-row md:space-x-7 space-y-4 md:space-y-0">
        <a
          href="/files/ryan_ho_resume.pdf"
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

        <div className="pt-4 block md:hidden">It&apos;s {time} for Ryan</div>
      </div>
    </footer>
  );
}
