import { useQuery } from "react-query";
import { cachedTime, getAboutUs } from "@/api/general.api";

const SectionOne = () => {

  const { isLoading:contentLoading,data:content } = useQuery('getAboutUs',getAboutUs,cachedTime)

  return (
    <div className=" bg-palette-one">
      <div className="max-w-[1200px] px-3 md:px-0 mx-auto pt-[72px] pb-[122px]">
        <h2 className="md:text-center capitalize text-[28px] md:text-[40px] font-bold mb-[25px]">
          {/* We are your Pocket-sized investment adventure */}
          {content?.title}
        </h2>
        <p className="font-light md:font-normal md:text-center text-lg mb-[45px] leading-[25px]">
          {/* At Trades Trek, we believe that financial success should be within
          everyone&apos;s reach. We&apos;re dedicated to providing you with the
          knowledge and tools you need to navigate the world of investments and
          achieve your financial goals. */}
          {content?.subtitle}
          
        </p>
        {/* <p className="font-light md:font-normal md:text-center text-lg mb-[45px] leading-[25px]">
          Our mission is to empower individuals to take control of their
          finances and invest with confidence. We believe that by educating
          individuals on the ins and outs of investing, we can help them make
          better investment decisions and achieve their financial goals. Our
          team of investment experts is passionate about sharing their knowledge
          and experience with our clients, providing them with the tools and
          resources they need to succeed in the stock market.
        </p> */}
        {/* <p className="font-light md:font-normal md:text-center mb-[45px] text-lg leading-[25px]">
          At Tradestrek, we offer a wide range of educational resources,
          including a comprehensive investing blog, investment courses,
          competitions, and a user-friendly investing app. Our blog provides
          expert insights and analysis on the latest investment trends, news,
          and strategies. Our investment courses cover a range of topics, from
          basic investing terminology to advanced investment strategies, and are
          designed to meet the needs of beginners and experienced investors
          alike.
        </p>
        <p className="font-light md:font-normal md:text-center mb-[45px] text-lg leading-[25px]">
          Our investing app is designed to make investing in the stock market
          easy and accessible for everyone. With our app, users can track their
          investments, receive real-time market updates, and execute trades with
          just a few taps. Our app also includes educational resources and tools
          to help users make informed investment decisions.
        </p> */}
        {/* <p className="font-light md:font-normal md:text-center mb-[45px] text-lg leading-[25px]">
          At Tradestrek, we are committed to providing our clients with the best
          possible service and support. Our team of investment experts is
          available to answer any questions or concerns you may have about
          investing, and our customer support team is always ready to assist you
          with any issues you may encounter.
        </p> */}
        {/* <p className="font-light md:font-normal md:text-center text-lg leading-[25px]">
          Investing can be intimidating, but it doesn&apos;t have to be. At
          Tradestrek, we believe that with the right tools and resources, anyone
          can become a successful investor.
        </p> */}
      </div>
    </div>
  );
};

export default SectionOne;
