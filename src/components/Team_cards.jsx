import React from "react";

function Team_cards({ info }) {
  return (
    <React.Fragment>
      <section>
        <div className=" card w-52 h-auto bg-base-100">
          <figure>
            <img className="rounded-md" src={info.img} alt="image" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title mt-2">{info.name}</h2>
            <p className="text-red-500 font-light text-center">
              {info.designation}
            </p>
            <div className="card-actions justify-end">
              <button className="btn my-5 px-3 hover:bg-white hover:text-black border py-1 rounded-full bg-red-500 ease-in-out transition-all duration-500 text-white">
                Read more
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Team_cards;
