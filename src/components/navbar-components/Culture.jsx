import React from "react";

function Culture() {
  return (
    <React.Fragment>
      <section>
        <div className=" text-center">
          <h1 className="text-5xl my-5 font-semibold">Our Culture</h1>
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
      </section>
    </React.Fragment>
  );
}

export default Culture;
