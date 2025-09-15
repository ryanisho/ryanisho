import { useState } from "react";

export default function About() {
  const [showDatadog, setShowDatadog] = useState(false);
  const [showColor, setShowColor] = useState(false);

  return (
    <>
      <div className="sm:w-sm w-xs pt-10 sm:pt-0 sm:pl-20">
        <p
          className={`text-base mb-4 leading-tight transition-colors duration-300 ease-in-out ${
            showDatadog || showColor ? "text-[#adadad]" : ""
          }`}
        >
          Ryan is building at{" "}
          <span
            className={`text-black hover:cursor-pointer ${
              showDatadog ? "underline" : "hover:underline"
            }`}
            onClick={() => {
              setShowDatadog(!showDatadog);
              setShowColor(false);
            }}
          >
            Datadog
          </span>
          . He previously worked at Cisco, which he is still very actively
          involved with as an open source engineer.
        </p>
        <p
          className={`text-base mb-4 leading-tight transition-colors duration-300 ease-in-out ${
            showDatadog || showColor ? "text-[#adadad]" : ""
          }`}
        >
          In his spare time, he studies the web, tries out music, and enjoys
          photography, spikeball + Formula One.
        </p>
        <p
          className={`text-base mb-4 leading-tight transition-colors duration-300 ease-in-out ${
            showDatadog || showColor ? "text-[#adadad]" : ""
          }`}
        >
          He is an engineer & Cornell graduate. He grew up in New Jersey and has
          rotated between NYC and NJ in the last few years.
        </p>
        <p
          className={`text-base mb-4 leading-tight transition-colors duration-300 ease-in-out ${
            showDatadog || showColor ? "text-[#adadad]" : ""
          }`}
        >
          His favorite color is{" "}
          <span
            className={`text-black hover:cursor-pointer ${
              showColor ? "underline" : "hover:underline"
            }`}
            style={{ color: showColor ? "#D22B2B" : "black" }}
            onClick={() => {
              setShowColor(!showColor);
              setShowDatadog(false);
            }}
          >
            #D22B2B
          </span>
          .
        </p>
      </div>

      <div className="sm:justify-center">
        <div>
          <div className="w-full h-[700px] sm:pt-0 pt-10">
            {showDatadog ? (
              <div className="transition-opacity duration-300 ease-in-out">
                <p className="sm:pl-12 sm:w-2xl w-xs animate-fade-in">
                  Datadog is a monitoring and analytics platform that provides
                  observability across cloud infrastructure, applications, and
                  logs.
                  <br></br> <br></br>
                  We help organizations monitor their entire technology stack in
                  real-time, enabling them to detect issues, optimize
                  performance, and ensure reliable service delivery.
                  <br></br>
                  <br></br>
                  You can learn more at{" "}
                  <span className="text-black hover:underline hover:cursor-pointer">
                    <a href="https://www.datadog.com" target="_blank">
                      datadog.com
                    </a>
                  </span>{" "}
                  and{" "}
                  <span className="text-black hover:underline hover:cursor-pointer">
                    <a href="mailto:rh564@cornell.edu">reach out</a>
                  </span>{" "}
                  if you're interested in building with us.
                </p>
              </div>
            ) : showColor ? (
              <div className="transition-opacity duration-300 ease-in-out">
                <p className="sm:pl-12 sm:w-2xl w-xs leading-tight animate-fade-in">
                  Yves Klein explored red, a color he saw as fiery, corporeal,
                  and charged with passion. In his monochromes it burned with
                  raw intensity—vivid, visceral, and immediate.
                  <img src="/img/red.jpg" className="pt-5"></img>
                </p>
              </div>
            ) : (
              <img
                src="/img/nyc.jpg"
                className="sm:pl-70 max-w-full max-h-full object-contain animate-fade-in"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
