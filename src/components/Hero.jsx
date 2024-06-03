import React from "react";
import Cards from "./Cards";

function Hero() {
  return (
    <React.Fragment>
      <main className="w-full">
        <div>
          <img
            className=" h-[75vh] w-full max-lg:h-auto"
            src="https://www.benow.in/assets/img/banner-4.jpg"
            alt="hero-img"
          />
        </div>
        <section className="info bg-white">
          <div className="container mx-auto">
            <h1 className="text-red-600 font-semibold pt-7 text-4xl text-center mb-8">
              BENOW ECOSYSTEM
            </h1>
            <div className="max-w-3xl mx-auto ">
              <p className="text-center text-2xl max-lg:text-[1.2em] font-light">
                Brand EMI Engine Is Non Trivial - It's an info/payments super
                highway with multiple intersections, Check points, routes,
                connections and destinations. Benow makes it seamless for all
                the stakeholders
              </p>
            </div>
          </div>
          <div className="w-[80vw] flex my-3 max-lg:relative justify-center ">
            <video
              autoPlay
              loop
              muted
              src="https://www.benow.in/assets/img/benow-ecosystem2.gif"
            ></video>
            <img
              className="max-lg:absolute left-1/2 top-1/2 max-lg:-translate-x-[40%] max-lg:-translate-y-[50%]"
              src="https://www.benow.in/assets/img/benow-ecosystem2.gif"
              alt="benow-eco.system"
            />
          </div>

          <div className=" map-img relative max-lg:flex-col max-lg:items-center w-full bg-[#404075] z-1 flex">
            <div className="w-1/2">
              <img
                className=" object-cover  w-auto h-auto  "
                src="https://www.benow.in/assets/images/Benow_map.gif"
                alt="India-map"
              />
            </div>
            <div className="w-1/2 flex justify-center max-lg:text-[0.8em]  flex-col">
              <h1 className="text-white flex items-start text-4xl max-lg:text-2xl max-lg:whitespace-nowrap font-semibold mb-2">
                10 K + pincodes
              </h1>
              <p className="text-white">
                Benow extends affordability beyond top cities, tier 2 and 3
                towns covering <br /> over{" "}
                <strong className=" text-2xl mt-1 max-lg:text-sm">
                  10,000
                </strong>{" "}
                plus pincodes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Cards />
    </React.Fragment>
  );
}

export default Hero;
