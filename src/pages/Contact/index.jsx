import MetaComponent from "../../components/MetaComponent"
import SectionOne from "./sections/SectionOne"
import SectionTwo from "./sections/SectionTwo"

const Contact = () => {
  return (
    <div>
      <MetaComponent page='contact'/>

      <SectionOne/>
      <SectionTwo />
    </div>
  )
}

export default Contact