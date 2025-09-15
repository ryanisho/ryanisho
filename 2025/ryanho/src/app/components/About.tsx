export default function About() {
  return (
    <>
      <div className="sm:w-sm w-xs pt-10 sm:pt-0 sm:pl-20">
        <p className="text-base mb-4 leading-tight">
          Ryan is building at Datadog. He previously worked at Cisco, which he
          is still very actively involved with as an open source engineer.
        </p>
        <p className="mb-4 leading-tight">
          In his spare time, he studies the web, tries out music, and enjoys
          photography, spikeball + Formula One.
        </p>
        <p className="mb-4 leading-tight">
          He is a self-made engineer & Cornell graduate. He grew up in New
          Jersey and has rotated between NYC and NJ in the last few years.
        </p>
        <p className="mb-4 leading-tight">
          His favorite color is TBD and his favorite author is ?.
        </p>
      </div>

      <div className="sm:pl-70 sm:justify-center">
        <div className="text-center">
          <div className="w-full h-[700px] sm:pt-0 pt-10 sm:flex sm:items-center sm:justify-center">
            <img
              src="/img/nyc.jpg"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
