import HandShake from "../../../assets/Images/Home/HandShake.png";
import CheckList from "../../../assets/Images/Home/CheckList.png";
import Time from "../../../assets/Images/Home/Time.png";
import Rank from "../../../assets/Images/Home/Rank.png";

const benefits = [
  {
    icon: Rank,
    title: "Professional-Grade Trading Tools",
    content: `Our trading tools are designed to meet the needs of professional traders, giving you an edge in today's competitive markets.`,
  },
  {
    icon: HandShake,
    title: "Educational Resources",
    content: `Get access to a wealth of educational resources, including webinars, tutorials, and articles, to help you improve your trading skills and knowledge.`,
  },
  {
    icon: Time,
    title: "Outstanding Customer Support",
    content: `Our team of experts are always available to provide you with exceptional customer support and answer any questions you may have.`,
  },
  {
    icon: CheckList,
    title: "Real-Time Market Data",
    content: `We help you stay on top of the latest market news and make trades with confidence using our real-time market data.`,
  },
];

const SectionThree = () => {
  return (
    <div className="w-full bg-palette-one">
      <div className="max-w-[1200px] mx-auto pb-24 px-4 md:px-0">
        <div className="pt-[52px]">
          <div className="flex justify-center">
            <div className="relative w-fit mb-14">
              <h2 className="text-2xl md:text-[32px] font-bold pb-3">Why Choose Us?</h2>
              <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-0 rounded-[40px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[27px]">
          {benefits.map((benefit, id) => (
            <div
              key={id}
              className="bg-white rounded-[20px] shadow-xl px-2.5 pt-[30px] pb-[55px] "
            >
              <div className="flex justify-center">
                <div className="w-[72px] h-[72px] mb-[18px] rounded-full bg-[#EBEBEB] flex justify-center items-center">
                  <img src={benefit.icon} alt="benefit" />
                </div>
              </div>
              <p className="text-center font-medium text-[22px] mb-2">
                {benefit.title}
              </p>
              <p className="text-center font-light text-lg leading-[25px]">
                {benefit.content}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
