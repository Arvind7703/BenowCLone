import React, { useEffect, useRef } from "react";

function About() {
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
            className="w-full h-[70vh] object-cover"
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
      <section>
        <div className="flex justify-center">
          <h1 className="font-semibold text-5xl">Our Founders</h1>
        </div>
        <div className="founders w-full h-[75vh] flex justify-around">
          <div className="w-1/2 flex justify-end mr-10 relative">
            <img
              className=" bg-zinc-700 bg-right rounded-lg my-5  h-[70vh] w-[40vw]"
              src="https://www.benow.in/img/f1.png"
              alt="Benow-Founder-img"
            />
            <div className="absolute inset-0 left-36 top-20 ">
              <span className="text-white leading-tight text-2xl font-bold">
                SUDHAKAR RAM
              </span>
              <br />
              <span className=" text-zinc-400 font-bold">FOUNDER</span>
            </div>
          </div>

          <div className="w-1/2 mb-7 relative">
            <img
              className="bg-zinc-500 rounded-lg my-5 h-[70vh] w-[40vw]"
              src="https://www.benow.in/img/f2.jpg"
              alt=""
            />

            <div className="absolute inset-0 ml-10 mt-20 ">
              <span className="text-white text-2xl font-bold">SOORRAJ VS</span>
              <br />
              <span className=" text-zinc-400 font-bold">CO FOUNDER</span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
