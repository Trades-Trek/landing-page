import { useQuery } from "react-query";
import Illustrate1 from "../../../assets/Images/About/Illustrate1.png";
import Illustrate2 from "../../../assets/Images/About/Illustrate2.png";
import { getCompanyInfoApi } from "../../../api/general.api";
import Loader, { BigLoader } from "../../../components/Loader";

const SectionTwo = () => {

  const {isLoading,data} = useQuery('getCompanyInfoApi',getCompanyInfoApi,{cacheTime:10000 * 600 * 50})
  return (
     <div>
    <div className=" pt-[84px] pb-32 w-full">
{
  isLoading&& <Loader/>
}
      <div className="max-w-[1200px] mx-auto px-3 md:px-0">
        {/* Row 1 */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl purpleBg md:grid-cols-2 mb-14 md:items-center">
          <div>
            <img src={Illustrate1} alt="illustration" className="w-full" />
          </div>
          <div className="md:pl-[77px]">
            <div className="md:w-[473px] px-4 md:px-0">
              <p className="text-white font-bold text-2xl md:text-[32px] mt-[30px] mb-[15px] md:mt-0 md:mb-8">
                Our Mission
              </p>
              <p className="font-medium text-white md:mb-0 mb-[43px]">
              {data?.mission_statement}
              </p>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl purpleBg md:grid-cols-2 md:items-center">
          <div className="md:pl-[86px]">
            <div className="md:w-[473px] px-4 md:px-0">
              <p className="text-white font-bold text-2xl md:text-[32px] mt-[30px] mb-[15px] md:mt-0 md:mb-8">
                Our Vision
              </p>
              <p className="font-medium text-white md:mb-0 mb-[43px]">
                {data?.vision_statement}
              </p>
            </div>
          </div>
          <div className="order-first md:order-last" >
            <img src={Illustrate2} alt="illustration" className="w-full" />
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default SectionTwo;
