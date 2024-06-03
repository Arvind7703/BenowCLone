import React, { useRef } from "react";

function Culture_cards({ data, className }) {
  return (
    <React.Fragment>
      <div className={`flex justify-center mb-5 ${className}`}>
        <img className="w-[55vw] h-[55vh]" src={data.src} alt="the-shot" />
        <div>
          <video className="h-[55vh] w-[25vw]" src={data.vid}></video>
          <img src={data.vid} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Culture_cards;
