import MetaComponent from "@/components/MetaComponent";
import SectionOne from "@/components/pagesComponent/FAQ/sections/SectionOne";
import SectionTwo from "@/components/pagesComponent/FAQ/sections/SectionTwo";
import GeneralLaout from "@/layout/GeneralLaout";
import { useState } from "react";




const Faq = ()=>{
    const [query, setQuery] = useState("");

    return (
        <GeneralLaout>
        <MetaComponent
        page='faq'
        />
      <SectionOne query={query} setQuery={setQuery} />
      <SectionTwo query={query} />
        </GeneralLaout>
    )
}


export default Faq