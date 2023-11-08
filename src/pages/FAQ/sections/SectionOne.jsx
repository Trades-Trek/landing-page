import { BsSearch } from "react-icons/bs";
import propTypes from "prop-types";

const SectionOne = ({ query, setQuery }) => {
  return (
    <div className="w-full faqPage bg-palette-one">
      <div className="pb-[177px]" >
        <div className="pt-[45px]">
          <div className="flex justify-center">
            <div className="relative w-fit mb-14">
              <h2 className="text-2xl text-center md:text-[32px] font-bold pb-3">
                Frequently Asked Questions(FAQs)
              </h2>
              <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-20 md:left-0 rounded-[40px]"></div>
            </div>
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
