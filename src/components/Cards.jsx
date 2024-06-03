import React from "react";

function Cards() {
  return (
    <React.Fragment>
      <section className="transaction-guide-cards w-full  h-screen   max-lg:h-auto mb-5  ">
        <div className="title flex text-4xl justify-center max-lg:flex-row ">
          <h1 className="text-red-600 font-semibold text-center my-20 max-lg:text-[0.8em]">
            3 Easy steps to Go live for <br />
            Transactions
          </h1>
        </div>
        <div className="flex  gap-5 justify-around max-lg:flex-col max-lg:mb-5 items-center ">
          <div className="card-container bg-zinc-100 ml-5 max-lg:ml-0 rounded-md relative max-lg:flex max-lg:items-end max-lg:size-96  hover:scale-110 hover:border-2 border-zinc-700  hover:ml-10 ease-in-out transition duration-500 hover:z w-full md:w-[35vw] h-[55vh] hover:z-20 max-sm:hover:scale-100 max-sm:hover:border-none">
            <span className="text-black top-2 left-2 bg-[#FFEDE8] py-7 text-2xl shadow-2xl border-zinc-300 border z-20 rounded-full px-2 font-bold absolute">
              Step 1
            </span>
            <img
              className="w-full rounded-lg h-[40vh] absolute max-lg:static   bottom-0 right-0"
              src="https://www.benow.in/assets/img/app1.png"
              alt="Application-guide"
            />
          </div>
          <div className="card-container bg-zinc-100 hover:scale-125 max-lg:flex max-lg:items-end max-lg:size-96 hover:border-2 border-zinc-700 ease-in-out transition duration-500 hover:z-20 max-sm:hover:scale-100 max-sm:hover:border-none rounded-md relative w-full md:w-[35vw] h-[55vh]">
            <span className="text-black top-2 left-2 bg-[#FFF6E9] shadow-2xl border-zinc-300 border  py-7 text-2xl z-20 rounded-full px-2 font-bold absolute">
              Step 2
            </span>
            <img
              className="w-full rounded-lg h-[40vh] absolute max-lg:static bottom-0 right-0"
              src="https://www.benow.in/assets/img/app2.png"
              alt="Login-guide"
            />
          </div>
          <div className="card-container bg-zinc-100 rounded-md hover:border-2 max-lg:flex max-lg:items-end max-lg:size-96  border-zinc-700 hover:scale-110 ease-in-out transition duration-500 hover:z-20 max-sm:hover:scale-100 max-sm:hover:border-none hover:right-10 relative w-full md:w-[35vw] h-[55vh]">
            <span className="text-black top-2 left-2 bg-[rgb(237,255,223)] py-7 shadow-2xl border-zinc-300 border text-2xl  rounded-full px-2 font-bold absolute">
              Step 3
            </span>
            <img
              className="w-full rounded-lg h-[40vh] absolute max-lg:static bottom-0 right-0"
              src="https://www.benow.in/assets/img/app3.png"
              alt="KYC-guide"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Cards;
