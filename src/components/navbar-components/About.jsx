import React, { useEffect, useRef } from "react";
import TeamCard from "../TeamCard";

function About(info) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <React.Fragment>
      <section>
        <div>
          <img
            className="w-auto h-[70vh] max-md:h-[40vh] max-lg:object-cover"
            src="https://www.benow.in/assets/images/team.jpg"
            alt="Team-photo"
          />
        </div>
        <div className="timeline ">
          <video
            ref={videoRef}
            autoPlay
            loop
            className="w-0 h-0"
            src="https://www.benow.in/img/Timeline.gif"
          ></video>
          <img
            className="my-10"
            src="https://www.benow.in/img/Timeline.gif"
            alt=""
          />
        </div>
      </section>
      <section className="our-founders">
        <div className="flex justify-center mb-28">
          <h1 className="font-semibold text-5xl">Our Founders</h1>
        </div>
        <div className="flex max-lg:flex-wrap">
          <div className="founders w-full h-[75vh] flex justify-center">
            <div>
              <div className="relative hover:opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent max-lg:w-full w-[40vw] h-[70vh] rounded-lg opacity-50 z-20"></div>
                <img
                  className="bg-zinc-500 w-[40vw] max-lg:w-full h-[70vh] bg-right rounded-lg "
                  src="https://www.benow.in/img/f1.png"
                  alt="Benow-Founder-img"
                />
                <p className="absolute  text-2xl  inset-0 justify-center items-center text-white opacity-0 transition-opacity duration-500 ">
                  {" "}
                  Sudhakar set benow on a course to building and democrating
                  disruptive - technology solution to empower the Indian
                  retailers.
                </p>

                <div className="absolute inset-0 bottom-12 flex flex-col justify-end items-center text-white">
                  <div className=" text-center">
                    <span className="text-white leading-tight text-2xl font-extrabold">
                      SUDHAKAR RAM
                    </span>
                    <br />
                    <span className="text-zinc-100 font-bold">FOUNDER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------- */}
          <div className="founders w-full h-[75vh] flex justify-center">
            <div>
              <div className="relative hover:opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent max-lg:w-full w-[40vw] h-[70vh]  rounded-lg opacity-30 z-20"></div>
                <img
                  className="bg-zinc-500 w-[40vw] max-lg:w-full h-[70vh] bg-right rounded-lg"
                  src="https://www.benow.in/img/f2.jpg"
                  alt="Benow-Founder-img"
                />

                <p className="absolute  text-2xl  inset-0 justify-center items-center text-white opacity-0 transition-opacity duration-500 ">
                  {" "}
                  Soorraj takes over the mantle from Sudhakar and with the help
                  of the core team continued the journey by adding on to the
                  list of disruptions and steered benow through multiple black
                  swan events by converting them into an opportunity.
                </p>

                <div className="absolute inset-0 bottom-10 flex flex-col justify-end items-center text-white">
                  <div className=" text-center">
                    <span className="text-zinc-900 leading-tight text-2xl font-extrabold">
                      SOORRAJ VS
                    </span>
                    <br />
                    <span className="text-zinc-500 font-bold">CO FOUNDER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-card">
        <div className="flex justify-center my-10">
          <h1 className="text-zinc-900 text-4xl mb-5 font-bold">
            Leadership Team
          </h1>
        </div>
        <TeamCard />
      </section>
    </React.Fragment>
  );
}

export default About;
