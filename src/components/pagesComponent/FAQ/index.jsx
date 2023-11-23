import { useState } from "react"
import SectionOne from "./sections/SectionOne"
import SectionTwo from "./sections/SectionTwo"
import MetaComponent from "../../components/MetaComponent";

const Faq = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <MetaComponent page='faq'/>
      <SectionOne query={query} setQuery={setQuery} />
      <SectionTwo query={query} />
    </div>
  )
}

export default Faq