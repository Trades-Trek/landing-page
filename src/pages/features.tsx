import GeneralLaout from "@/layout/GeneralLaout"

import bookPhone from '@/assets/bookforphone.svg'
import lockerImge from  "@/assets/Locker_icon.svg"
import { FaPlay } from "react-icons/fa";
import MiniNavWithDisPlay from "@/components/MiniNavWithDisPlay";
import Phone from '@/assets/phone-2.png';
import { GiWorld } from "react-icons/gi";
import photo from '@/assets/academy.png'
import SectionFive from "@/components/pagesComponent/Homepage/sections/SectionFive";


const features =[
    {
        linkText:'Multu-lingual Support',
        linkIcon:<GiWorld/>,
        id:'tab1',
        content:{
            title:'People Directory',
            body:`With remote, dispersed, deskless employees not having access to networked systems and managing updates centrally, keeping an up-to-date directory of employee contact details can be problematic! With Thrive.App's People Directory, all employees have access to a directory. The directory can be managed by both the business and the employees so contact information can be kept up-to-date and readily accessible.`,
            img:Phone.src
        }
    },
    {
        linkText:'Multu-lingual Suppor dsfdt',
        linkIcon:<GiWorld/>,
        id:'tab2',
        content:{
            title:'People Directory',
            body:`With remote, dispersed, deskless employees not having access to networked systems and managing updates centrally, keeping an up-to-date directory of employee contact details can be problematic! With Thrive.App's People Directory, all employees have access to a directory. The directory can be managed by both the business and the employees so contact information can be kept up-to-date and readily accessible.`,
            img:Phone.src
        }
    }
]
const Features = ()=>{


    return(
        <GeneralLaout>

            <div className="container mx-auto" >

            {/* features hero section */}
            <div id="feature_hero_section" className="text-center p-2 py-8  md:p-12 md:max-w-screen-lg md:mx-auto ">
                <img src={bookPhone.src} className="mx-auto block md:hidden " alt="" />
            <h1 className="text-xl font-semibold text-[#203554] pb-2 md:text-5xl  ">The Staples in your Employee Engagement Toolbox</h1>
            <p className="px-1 font-medium">
            Connect and reach everyone, everywhere, every time with an engaging, secure mobile app that transforms communication, increases efficiencies and reduces staff turnover. 
            </p>
            </div>
            {/* end features hero section */}


            {/* start of content with video */}
                <div className="p-4 bg-palette-one my-8 rounded flex flex-col gap-10  md:flex-row md:p-12">
                    <div className="md:w-1/2">
                        <h3 className="flex font-semibold	py-4  md:items-center md:text-2xl">
                            <img src={lockerImge.src} alt="" 
                            className="w-1/6 md:w-[50px]" />
                            <span
                            className="block w-5/6"
                            >Secure Document Sharing with Locker</span></h3>
                        <p className="pb-4 md:leading-8 md:text-lg	">
                        Give your employees a secure space for their personal documents with Locker, Thrive.{"App's"} digital equivalent of a physical locker. Connect all of your existing systems together on one app for on-the-go ease of use, removing the need for paper trails and manual storage. With Locker, employees can access confidential and personal files, from payslips to training certificates, and important company information - everything they need at their fingertips. Empower your employees to consume the content they want for a more connected employee experience.
                        </p>

                        <button className="text-white border-0 rounded-[px] bg-palette-two" type="button" >
                        See Locker in Action
                        </button>
                    </div>

                    <div  id="playbuttonBackound" 
                    className="drop-shadow-xl cursor-pointer rounded flex items-center justify-center md:w-1/2 md:h-[400px]">
                        {/* the play button */}
                        {/* <img src="" alt="" /> */}
                        <div className="shadow-2xl p-8 rounded-full">
                        <FaPlay
                        className='text-palette-two text-2xl pointer-events-none 	'
                        />
                        </div>
                    </div>
                </div>
            {/* end of content with video */}


                <div className="py-4 bg-red">
                <MiniNavWithDisPlay 
                data={features}
                />
                </div>    


                <div className="flex flex-col gap-5 p-3 text-center md:flex-row md:gap-5 md:text-left items-center " >
                    <div className="md:w-1/2 ">
                        <h2 className="font-semibold text-xl py-2 md:text-4xl ">
                            Thrive.App Academy  {"We're"} With You Every Step of the Way
                        </h2>
                        <p>
                            Alongside the support and guidance from our Client Success Team, we have added Thrive.App Academy. Quickly involve and bring different departments up-to-speed with how the app works. Train new Content Editors without expensive or dedicated training days. New Editors can learn at their own pace and during their own time through our structured series of ‘Learning Tracks’. Make managing your long-term communications and engagement strategy easier by including more areas of the business through the Thrive.App Academy.
                        </p>
                    </div>

                    <img src={photo.src} className="md:w-1/2" alt="" />
                </div>            
            </div>

            <SectionFive  />

            
        </GeneralLaout>
    )
}
export default Features