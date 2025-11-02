import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { ChevronRight } from "lucide-react";

const Page1 = () => {
  return (
    <div
      className="w-full h-screen bg-[#E5FCF1] flex flex-col 
    justify-start items-center gap-12 py-5"
    >
      <div className="text-center space-y-2 w-full">
        <h1 className="text-[#373737] font-bold text-6xl">How It Works</h1>
        <p className="text-[#373737] font-light text-2xl">
          Fast, Easy, & Free Quotes
        </p>
      </div>
      <div className="flex justify-around items-start w-full">
        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <div className="flex justify-start gap-2 items-center">
            <span
              className="w-10 h-10 p-1 rounded-full bg-[#61D15C] text-[#373737] font-bold
          flex justify-center items-center text-xl"
            >
              1
            </span>
            <h3 className="text-3xl font-semibold text-[#373737]">
              Your Details
            </h3>
          </div>
          <div
            style={{
              backgroundImage: `url("https://www.bostonseeds.com/images/uploads/advice/March%20Lawn%20Care.jpg")`,
              backgroundBlendMode: "darken",
              backgroundColor: "#00000083",
            }}
            className=" w-72 h-72 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center p-5 border-5 border-[#B7D5C7]
              "
          >
            <div className="w-full flex justify-center items-center flex-col gap-2">
              <h4 className="w-[70%] break-all text-lg text-center text-white font-semibold">
                Professional Lawn <br /> Care Services in <br /> Columbus
              </h4>
              <p className="leading-none text-sm font-normal text-white">
                Fast, Easy & Free Quotes
              </p>
              <p className="leading-none text-xs font-light text-gray-300">
                Book your grass cutting in 60 seconds
              </p>
              <InputField
                placeholder="Enter your house address"
                className="!w-[70%]"
              />
              <Button className="!font-normal text-sm py-3 !w-[70%]">
                See Prices
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <div className="flex justify-start gap-2 items-center">
            <span
              className="w-10 h-10 p-1 rounded-full bg-[#61D15C] text-[#373737] font-bold
          flex justify-center items-center text-xl"
            >
              2
            </span>
            <h3 className="text-3xl font-semibold text-[#373737]">
              Choose a Pro
            </h3>
          </div>
          <div
            style={{
              backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/c64a0e105626605.5f7d56201acd0.png")`,
              backgroundBlendMode: "darken",
              backgroundColor: "#00000004",
            }}
            className=" w-72 h-72 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center p-5 border-5 border-[#B7D5C7]
              "
          ></div>
        </div>

        <div className="p-1 flex flex-col justify-start items-center gap-4">
          <div className="flex justify-start gap-2 items-center">
            <span
              className="w-10 h-10 p-1 rounded-full bg-[#61D15C] text-[#373737] font-bold
          flex justify-center items-center text-xl"
            >
              2
            </span>
            <h3 className="text-3xl font-semibold text-[#373737]">
              Choose a Pro
            </h3>
          </div>
          <div
            style={{
              backgroundImage: `url("https://img.lovepik.com/png/20231115/verification-clipart-man-is-holding-a-clipboard-and-looking-at_595004_wh860.png")`,
              backgroundBlendMode: "darken",
              backgroundColor: "#00000004",
            }}
            className=" w-72 h-72 rounded-full bg-no-repeat bg-center bg-cover
              flex justify-center items-center p-5 border-5 border-[#B7D5C7]
              "
          ></div>
        </div>
      </div>
      <Button className="w-1/6! py-4">
        See Prices
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Page1;
