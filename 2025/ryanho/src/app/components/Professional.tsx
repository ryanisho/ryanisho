export default function Professional() {
  const data = {
    work: [
      { name: "Datadog", url: "https://www.datadoghq.com/" },
      { name: "Cisco", url: "https://www.cisco.com/" },
      { name: "A-Labratories", url: "#" },
      { name: "Cornell CIS", url: "https://www.cs.cornell.edu/" },
    ],
    build: [
      { name: "Wavectl", url: "https://github.com/ryanisho/wavectl" },
      { name: "KBrowser", url: "https://github.com/ryanisho/kbrowser" },
      { name: "DDGO", url: "https://github.com/ryanisho/ddgo" },
      { name: "Capsule", url: "https://github.com/AutumnIeaf/capsule" },
      { name: "Got", url: "https://github.com/ryanisho/got" },
      { name: "Claim", url: "https://github.com/ryanisho/claim.ai" },
      { name: "TrivAI", url: "https://github.com/mbulling/TrivAI-mobile" },
      { name: "Sakura", url: "https://github.com/ryanisho/sakura" },
    ],
    sections: [
      {
        title: "Languages",
        items: [
          { name: "Golang", url: "#" },
          { name: "Python", url: "#" },
          { name: "TypeScript", url: "#" },
          { name: "C++", url: "#" },
        ],
      },
      {
        title: "Present",
        items: [
          { name: "Z-Fellows", url: "https://www.zfellows.com/" },
          { name: "BOOM", url: "#" },
          { name: "Big Red Hacks", url: "#" },
        ],
      },
      {
        title: "Visit",
        items: [
          { name: "New York City", url: "#" },
          { name: "San Francisco", url: "#" },
        ],
      },
    ],
  };

  const renderLinks = (items: Array<{ name: string; url: string }>) =>
    items.map((item, index) => (
      <p key={index}>
        {item.url === "#" ? (
          item.name
        ) : (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            {item.name}
          </a>
        )}
      </p>
    ));

  return (
    <>
      <div className="sm:w-sm w-xs pt-10 sm:pt-0 sm:pl-20">
        <p className="text-base mb-4 leading-tight">
          I enjoy building things that are interesting to me.
        </p>
        <p className="mb-4 leading-tight">
          I learn through hands-on experience and trial/error. I tend to be most
          helpful with fullstack work, where I can move between frontend polish
          and backend architecture.
        </p>
        <p className="mb-4 leading-tight">
          Passionate about AI, distributed systems, and performant code. Always
          learning.
        </p>
      </div>

      <div className="sm:w-sm w-xs pt-5 sm:pt-0 sm:pl-16 sm:flex-1">
        <div className="grid grid-cols-3 h-full max-w-lg">
          <div className="space-y-4">
            <div className="text-md leading-tight space-y-2 opacity-80">
              <p className="text-black">Work</p>
              {renderLinks(data.work)}
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-md leading-tight space-y-2 opacity-80">
              <p className="text-black">Build</p>
              {renderLinks(data.build)}
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-md leading-tight space-y-6 opacity-80">
              {data.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-2">
                  <p className="text-black">{section.title}</p>
                  {renderLinks(section.items)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
