import React from "react";

const Page4 = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #8cbf41, #42A042)",
      }}
      className="w-full h-screen p-6 py-8 flex flex-col gap-20"
    >
      <h2 className="font-bold text-5xl text-center leading-16 text-white">
        Local lawn mowing services <br /> in indianapolis Indiana compete <br />{" "}
        for your lawn
      </h2>
      <div className="flex justify-around items-start w-full">
        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <div
            style={{
              backgroundColor: "#0E4971",
            }}
            className=" w-40 h-40 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center
              "
          >
            <img
              className="w-30 h-30"
              src="https://cdn-icons-png.freepik.com/512/17986/17986624.png?ga=GA1.1.109328347.1753693542"
              alt=""
            />
          </div>
          <h3 className="text-3xl font-normal text-white">Get free quotes</h3>
        </div>
        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <h3 className="text-3xl font-normal text-white">
            Read there reviews and <br /> choose with confidence
          </h3>
          <div
            style={{
              backgroundColor: "#0E4971",
            }}
            className=" w-40 h-40 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center
              "
          >
            <img
              className="w-30 h-30"
              src="https://cdn-icons-png.freepik.com/512/8498/8498082.png?ga=GA1.1.109328347.1753693542"
              alt=""
            />
          </div>
        </div>
        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <div
            style={{
              backgroundColor: "#0E4971",
            }}
            className=" w-40 h-40 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center
              "
          >
            <img
              className="w-30 h-30"
              src="https://cdn-icons-png.freepik.com/512/3797/3797807.png?ga=GA1.1.109328347.1753693542"
              alt=""
            />
          </div>
          <h3 className="text-3xl font-normal text-white">
            Hire with ease & relax
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page4;
