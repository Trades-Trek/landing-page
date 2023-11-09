import NewsLetter from "../../components/NewsLetter"
import SectionFive from "./sections/SectionFive"
import SectionFour from "./sections/SectionFour"
import SectionOne from "./sections/SectionOne"
import SectionSix from "./sections/SectionSix"
import SectionThree from "./sections/SectionThree"
import SectionTwo from "./sections/SectionTwo"

const Homepage = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <NewsLetter />
    </div>
  )
}

export default Homepage