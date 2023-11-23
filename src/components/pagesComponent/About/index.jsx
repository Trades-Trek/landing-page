import MetaComponent from "../../components/MetaComponent"
import SectionOne from "./sections/SectionOne"
import SectionTwo from "./sections/SectionTwo"

const About = () => {
  return (
    <div>
      <MetaComponent page='about-us'/>
      

      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default About