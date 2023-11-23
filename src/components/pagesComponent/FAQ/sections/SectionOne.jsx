import { BsSearch } from "react-icons/bs";
import propTypes from "prop-types";
import { cachedTime, getFaqContent } from "@/api/general.api";
import { useQuery } from "react-query";

const SectionOne = ({ query, setQuery }) => {

  const {data} = useQuery('getFaqContent',getFaqContent,cachedTime)

  return (
    <div className="w-full faqPage bg-palette-one">
      <div className="pb-[100px]" >
        <div className="pt-[45px]">
        <div className="max-w-[1200px] px-3 md:px-0 mx-auto pt-[72px] pb-[72px]">
        <h2 className="md:text-center capitalize text-[28px] md:text-[40px] font-bold ">
          {/* We are your Pocket-sized investment adventure */}
          {data?.title}
        </h2>
        <p className="font-light md:font-normal md:text-center text-lg text-white  leading-[25px]">
          {data?.subtitle}
        </p>
      </div>

        </div>
        <div className="flex justify-center">
          <div className="md:w-[759px] h-[67px] flex items-center bg-white border-none drop-shadow-xl relative rounded-[15px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-full bg-transparent border-none focus:outline-none pl-14"
              placeholder="Search for questions"
            />
            <BsSearch className="absolute left-6 text-zinc-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

SectionOne.propTypes = {
  query: propTypes.string,
  setQuery: propTypes.func
}

export default SectionOne;
