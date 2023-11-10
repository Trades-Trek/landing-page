// import Avatar from "../../../assets/Images/Home/Avatar.png";
import { BsStarFill } from "react-icons/bs";
// import Avatar2 from "../../../assets/Images/Home/BrownsonNsikan.jpg";
// import Avatar3 from "../../../assets/Images/Home/IsmailBello.jpg";
import Avatar4 from "../../../assets/Images/Home/JohnOjeah.jpg";
// import Avatar5 from "../../../assets/Images/Home/KomolafeJoshua.jpg";
import Avatar6 from "../../../assets/Images/Home/RidwanMutiu.jpg";
import Avatar7 from "../../../assets/Images/Home/SteVeAawsum.jpg";
import Avatar8 from "../../../assets/Images/Home/RuthOkoye.jpg";
import { useQuery } from "react-query";
import { getTestimonials } from "../../../api/general.api";

// const testimonials = [
//   {
//     rating: 5,
//     content: `I've been using the Trades Trek Stock Trading App for over a few months now, and I couldn't be happier with my experience. This app has transformed the way I manage my investments. The user-friendly interface makes it easy to navigate, and I love the real-time market data and customizable watchlists. But what really sets Trades Trek apart is its lightning-fast execution of trades. I've never experienced any delays, even during high volatility. Plus, the in-depth research tools and educational resources have helped me make more informed investment decisions. Thanks to Trades Trek,  I've seen my portfolio grow significantly. I highly recommend this app to anyone looking to step up their trading game.`,
//     name: "Komolafe Joshua",
//     pic: Avatar5,
//   },
//   {
//     rating: 5,
//     content: `
    
//     The App is incredibly well structured and has been pivotal in helping me better understand the market and a simple way to trade. I could feel my brain growing while doing the activities.
    
//     As a tester, I've learned how to trade, and moving into trading in reality will be easy.
    
//     Thanks to the App developers and the organizers of the tasks. God bless you all.`,
//     name: "Ruth Okoye",
//     pic: Avatar8,
//   },
//   {
//     rating: 5,
//     content: `I am proud to be a part of the Trades Trek Community for the past few weeks. Trades Trek has increased my knowledge of trading. Despite the fact that I had a tight schedule I still learned from the community and its members. Not to talk about being a winner in their quizzes and tasks. I'm so glad to be a part of this community and I would like to share my winnings too.`,
//     name: "Ridwan Mutiu",
//     pic: Avatar6,
//   },
//   {
//     rating: 5,
//     content: `After a few months of encounter with Trades Trek, all I can say is full of positives. I'm now more financially educated than before and keen interest in stocks, savings, and other investments.`,
//     name: "John Ojeah",
//     pic: Avatar4,
//   },
//   // {
//   //   rating: 5,
//   //   content: `Thank you for the opportunity to be part of the Trades Trek Beta testing community and I don't take it for granted.
//   //   It has been an awesome experience learning under your tutelage the subject of trade, and investment and knowing my way around the applaudable Trades Trek app.
//   //   Knowledge acquired, we know is power and its usefulness can't be overemphasized. 
//   //   I've learned a lot from this community and would encourage everyone to be part of these great minds. 
//   //   Thank you for the power of investment received through knowledge acquired from the Trades Trek Beta Testing community.`,
//   //   name: "Brownson Nsikan",
//   //   pic: Avatar2,
//   // },
//   // {
//   //   rating: 5,
//   //   content: `Trades Trek App is a wonderful app. It's fun to navigate around, seamless services, and I would say it's very easy to use.
//   //   Makes trading excellent and interesting to roll with, user-friendly, fascinating user support experience.
//   //   Can't wait to have it launched already`,
//   //   name: "Ismail Bello",
//   //   pic: Avatar3,
//   // },
//   {
//     rating: 5,
//     content: `Coming from a curious novice in the Trade world, Trades Trek is an amazing application not meant only for professional traders but also for amateurs. 
//     Finally came to the understanding as to how the trade world works because of Trades Trek and also the knowledge and growth I have acquired through the demo experience. 
//     The app is not complicated to surf, has a great interface, and is useful!`,
//     name: "Steve Aawsum",
//     pic: Avatar7,
//   },
// ];
const SectionFive = () => {
  const {isLoading,data:testimonials} = useQuery('getTestimonials',getTestimonials)
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto pb-24">
        <div className="pt-[52px]">
          <div className="flex justify-center">
            <div className="relative w-fit mb-14">
              <h2 className="text-2xl md:text-[32px] font-bold pb-3">
                Testimonial
              </h2>
              <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-0 rounded-[40px]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 px-3 md:px-0 md:grid-cols-2 gap-x-5 gap-y-6">
          {testimonials?.map((testimonial, id) => (
            <div
              key={id}
              className="px-[25px] pt-[27px] pb-[21px] bg-[#F6F7F8] rounded-[20px]"
            >
              <div className="flex items-center mb-4 gap-x-1">
                {Array.from({ length: testimonial.rating }).map(
                  (rate, index) => (
                    <BsStarFill
                      key={index}
                      className="text-[#E9FA1E] text-xl"
                    />
                  )
                )}
                {Array.from({ length: 5 - testimonial.rating }).map(
                  (rate, index) => (
                    <BsStarFill
                      key={index}
                      className="text-[#D9DBE9] text-xl"
                    />
                  )
                )}
              </div>
              <p className="font-light text-sm md:w-[500px] mb-9">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-x-[30px]">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden" >
                  <img
                    src={testimonial.image}
                    alt="profile"
                    className=""
                  />
                </div>
                <p className="text-xl">
                {testimonial.first_name}{' '}{testimonial.last_name}
                  
                   </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
