import Illustrate6 from "@/assets/Images/Home/Illustrate6.png";
import Illustrate5 from "@/assets/Images/Home/Illustrate5.png";
import Illustrate4 from "@/assets/Images/Home/Illustrate4.png";
import Illustrate3 from "@/assets/Images/Home/Illustrate3.png";
import { useQuery } from "react-query";
import { getKeyFeatureApi } from "@/api/general.api";
import Loader from "@/components/Loader";

const SectionTwo = () => {
  const { isLoading,data:features} =useQuery('getKeyFeatureApi',getKeyFeatureApi,{
    'refetchOnWindowFocus':false
  })
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="pt-[110px]">
        <div className="flex justify-center  px-5">
          <div className="relative w-fit mb-28">
            <h2 className="text-2xl md:text-[32px] font-bold pb-3">
              {/* Key Features */}
              Learn to Trade Stocks with These Amazing Features


            </h2>
       
            <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-0 rounded-[40px]"></div>
          </div>
       
        </div>
       <div style={{'textAlign':'center'}}>
       {
        isLoading&&<Loader/>
      }
       </div>
      </div>

      <ul className="px-3 overflow-x-hidden list-none md:p-0">
        {features?.map((feature, id) => (
          <li
            className={`flex flex-col justify-center gap-x-[52px] items-center ${
              id === 1 || id === 3 ? "md:flex-row-reverse" : "md:flex-row"
            } mb-14`}
            key={id}
          >
            <img
              src={feature.image}
              alt="feature"
              className="md:w-[420px] md:h-[442px]"
            />
            <div className="md:w-[470px]">
              <p className="font-medium text-xl text-center md:text-left md:text-[28px] pt-4 md:pt-0 mb-2 md:mb-[15px]">
                {feature.title}
              </p>
              <p className="text-sm text-center md:text-left md:text-lg font-light leading-[25px]">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTwo;
