export default function Home() {
  return (
    <div className="min-h-screen main-container flex flex-col">
      <div className="flex h-full flex-1">
        <div className="space-y-2">
          <button className="block">About</button>
          <button className="block">Professional</button>
          <button className="block">Gallery</button>
        </div>

        <div className="w-sm pl-20">
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
            Jersey and has rotated between NYC, SF, and NJ in the last few
            years.
          </p>
          <p className="mb-4 leading-tight">
            His favorite color is TBD and her favorite author is ?.
          </p>
        </div>

        <div className="pl-70 justify-center">
          <div className="text-center">
            <div className="w-full h-[480px] flex items-center justify-center">
              <video
                src="/img/test.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center text-base">
        <div>Currently: NYC</div>
        <div className="flex space-x-7">
          <div>Resume</div>
          <div>LinkedIn</div>
          <div>Instagram</div>
        </div>
      </footer>
    </div>
  );
}
