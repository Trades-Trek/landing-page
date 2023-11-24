import MetaComponent from "@/components/MetaComponent"
import SectionOne from "@/components/pagesComponent/About/sections/SectionOne"
import SectionTwo from "@/components/pagesComponent/About/sections/SectionTwo"
import GeneralLaout from "@/layout/GeneralLaout"




const AboutUs = ()=>{



    return (
        <GeneralLaout>
            <MetaComponent
        page='about-us'
        />
                      <SectionOne />
      <SectionTwo />
        </GeneralLaout>
    )
}

export default AboutUs