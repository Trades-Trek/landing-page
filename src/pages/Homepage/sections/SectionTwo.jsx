import Illustrate6 from "../../../assets/Images/Home/Illustrate6.png";
import Illustrate5 from "../../../assets/Images/Home/Illustrate5.png";
import Illustrate4 from "../../../assets/Images/Home/Illustrate4.png";
import Illustrate3 from "../../../assets/Images/Home/Illustrate3.png";

const features = [
  {
    title: "Build a Portfolio",
    content: `Build and manage a diversified portfolio of investments with Trades Trek.`,
    image: Illustrate6,
  },
  {
    title: "Trade with Advanced Tools",
    content: `Trade smarter with our platform's real-time market data and analysis. We offer expert tools and resources for active traders looking to make informed investment decisions.`,
    image: Illustrate5,
  },
  {
    title: "Compete with the Best Traders",
    content: `Beat the competition with our investment simulation tools and win prizes.`,
    image: Illustrate4,
  },
  {
    title: "Learn",
    content: `Learn more about investing and personal finance through our educational resources and tutorials. Get expert insights to maximize your investment returns.`,
    image: Illustrate3,
  },
  
];

const SectionTwo = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="pt-[110px]">
        <div className="flex justify-center">
          <div className="relative w-fit mb-28">
            <h2 className="text-2xl md:text-[32px] font-bold pb-3">
              Key Features
            </h2>
            <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-0 rounded-[40px]"></div>
          </div>
        </div>
      </div>
      <ul className="px-3 overflow-x-hidden list-none md:p-0">
        {features.map((feature, id) => (
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
                {feature.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTwo;
