import { useState } from "react"
import SectionOne from "./sections/SectionOne"
import SectionTwo from "./sections/SectionTwo"

const Faq = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <SectionOne query={query} setQuery={setQuery} />
      <SectionTwo query={query} />
    </div>
  )
}

export default Faq