import MetaComponent from "@/components/MetaComponent"
import SectionOne from "@/components/pagesComponent/Contact/sections/SectionOne"
import SectionTwo from "@/components/pagesComponent/Contact/sections/SectionTwo"
import GeneralLaout from "@/layout/GeneralLaout"




const Contact = ()=>{


    return(
        <GeneralLaout>
        <MetaComponent
        page='contact-us'
        />
            <SectionOne/>
            <SectionTwo />

        </GeneralLaout>
    )
}

export default Contact