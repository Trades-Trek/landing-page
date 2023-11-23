import SectionOne from "@/components/pagesComponent/FAQ/sections/SectionOne";
import SectionTwo from "@/components/pagesComponent/FAQ/sections/SectionTwo";
import GeneralLaout from "@/layout/GeneralLaout";
import { useState } from "react";




const Faq = ()=>{
    const [query, setQuery] = useState("");

    return (
        <GeneralLaout>
      <SectionOne query={query} setQuery={setQuery} />
      <SectionTwo query={query} />
        </GeneralLaout>
    )
}


export default Faq