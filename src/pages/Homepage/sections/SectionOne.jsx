import Appstore from "../../../assets/Images/appstore.png";
import Playstore from "../../../assets/Images/playstore.png";
import Illustrate2 from "../../../assets/Images/Home/Illustrate1.png";
import Illustrate1 from "../../../assets/Images/Home/Illustrate2.png";

const SectionOne = () => {
  return (
    <div className="w-full bg-palette-one">
      <div className="max-w-[1200px] mx-auto px-3 md:px-0 pt-10">
        <div className="flex flex-col items-center w-full overflow-x-hidden gap-y-12 md:flex-row gap-x-6">
          <div className="md:w-[527px]">
            <h1 className="text-[28px] text-center md:text-left md:text-[40px] font-bold mb-3">
              Unlock your <span className="text-[#2525BB]" >financial</span> potentials with <span className="text-[#2525BB]" >Trades Trek</span>
            </h1>
            <p className="mb-10 text-lg font-light text-center md:text-left">
              Experience the World of Financial Education and Investment Simulation in One Place
            </p>
            <div className="flex items-center justify-center md:justify-start gap-x-3">
              <a href="https://apps.apple.com/ng/app/trades-trek/id6451382635" target="_blank" rel="noreferrer">
                <img src={Appstore} alt="appstore" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tradestrek.tradestrek"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Playstore} alt="playstore" />
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-end gap-14 ">
              <img
                src={Illustrate2}
                alt="illustrate"
                className="w-full md:w-1/2"
              />
              <img
                src={Illustrate1}
                alt="illustrate"
                className="hidden md:w-1/2 md:block md:h-[502px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
