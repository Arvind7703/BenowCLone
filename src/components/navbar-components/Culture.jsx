import React from "react";
import Culture_cards from "../Culture_cards";

function Culture() {
  return (
    <React.Fragment>
      <section>
        <div className=" text-center">
          <h1 className="text-5xl mb-5 font-semibold">Our Culture</h1>
          <p className="text-9xl text-[#F0F0F0] mb-3 max-md:hidden  font-extrabold">
            AT BENOW
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[70vw] mb-10 rounded-md"
            src="https://www.benow.in/img/8.jpg"
            alt="Game-day"
          />
        </div>
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/7.jpg",
            vid: "https://www.benow.in/assets/videos/take-the-shot.mp4",
          }}
        />
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/9.jpg",
            vid: "https://www.benow.in/assets/videos/ceo-of-what-we-do.mp4",
          }}
          className={"flex flex-row-reverse"}
        />
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/10.jpg",
            vid: "https://www.benow.in/assets/videos/sign-your-work.mp4",
          }}
        />
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/11.jpg",
            vid: "https://www.benow.in/assets/videos/be-the-sherpa.mp4",
          }}
          className={"flex flex-row-reverse"}
        />
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/12.jpg",
            vid: "https://www.benow.in/assets/videos/care-with-love.mp4",
          }}
        />
        <Culture_cards
          data={{
            src: "	https://www.benow.in/img/13.jpg",
            vid: "https://www.benow.in/assets/videos/own-tommorow.mp4",
          }}
          className={"flex flex-row-reverse"}
        />
      </section>
    </React.Fragment>
  );
}

export default Culture;
