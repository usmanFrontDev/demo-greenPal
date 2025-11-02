import { ChevronRight } from "lucide-react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import SecondCard from "../components/SecondCard";

const Page6 = () => {
  return (
    <div className="w-full bg-gray-50 py-10 flex-col flex justify-start items-center gap-12">
      <div>
        <h2 className="text-5xl font-bold text-center mb-2">
          Recent Lawn mowed in Columbus, OH
        </h2>
        <p className="text-2xl text-gray-400 font-light text-center">
          by GreenPal's community of lawn care pros
        </p>
      </div>
      <Carousel>
        {[1, 2, 3, 4, 5].map((i) => (
          <SecondCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAzk5MnCaK3et68sNcIYiQ4414h7R4aT_Kw&s"
            title="Yard Cutting — Dallas, Texas"
            location="Near Lakewood"
            price="$55 per cut"
            lastMowed="3 weeks ago"
            frequency="Bi-weekly"
            mowingPrice="$40"
            note="Front and sides twice a month, backyard once."
          />
        ))}
      </Carousel>
      <Button className=" py-4! !w-1/4">
        See Prices
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Page6;
