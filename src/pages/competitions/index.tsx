import MetaComponent from "@/components/MetaComponent"
import GeneralLaout from "@/layout/GeneralLaout"
import { useState } from "react"
import DummyImage from "../../../public/Illustrate2.png"
import { CustomModal } from "@/components/Modal"


{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,160C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,90.7C840,64,960,64,1080,90.7C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,192C840,192,960,160,1080,138.7C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
const Competitions = ()=>{
    const [filter,setFilter] = useState<string|undefined>(undefined);
    const [open,setOpen]= useState(true);
    const handleFilter =(value:string)=>{
      setFilter(`?subject=${value}`)
    }
    return (
        <GeneralLaout>
        {/* <MetaComponent
        page='home'
        /> */}
        <div className="h-[500px] bg-gradient-to-r from-palette-one to-black-500 md:h-[600px] f  relative competion_header"  >

            <div className="text-white text-center py-8 px-2  max-w-[1200px]  mx-auto md:text-left pt-[90px] " >
                <h2 className="text-2xl font-semibold py-3 md:text-5xl md:w-[800px]">
                Compete to win money, scholarships, and a foothold in the right industry!
                </h2>
                <p className="py-4 md:text-xl	">
                Take a look at our competitions and see what opportunities are available right now!
                </p>
                <button className="rounded-full my-4 text-palette-two bg-white">
                    View Our Current Competitions
                </button>
            </div>
            <div style={{
                'transform':'rotate(180deg)',
                'height':'83px',
            }}
            className="absolute bottom-0  left-0	w-full"
            >
            <svg xmlns="http://www.w3.org/2000/svg"
            style={{
                'height':'100%',
            'width':'calc(168% + 1.3px)',
            }}
            viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path fill="#FFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg>
            </div>
        </div>
        <br />
        <br />

        <div className="mx-auto max-w-[1200px] px-3">

        <div className=" flex gap-4 flex-wrap	" >
        <div className={`
        ${filter?.includes('sales')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px] p-2  shadow rounded-3xl`}
        onClick={e=>{
          handleFilter('sales')
        }}
        >
          Available {"competition's"}
        </div>
        <div 
          onClick={e=>{
            handleFilter('team')
          }}
        className={`
        ${filter?.includes('team')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px] p-2 shadow rounded-3xl`}
        >
          Our Terms And Conditions
        </div>
        <div 
        onClick={e=>{
          handleFilter('billing')
        }}
        className={`
        ${filter?.includes('billing')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px] p-2 shadow rounded-3xl`}>
          Weekly winners
        </div>

        <div 
        onClick={e=>{
          handleFilter('billing')
        }}
        className={`
        ${filter?.includes('billing')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px]  p-2 shadow rounded-3xl`}>
          Contact Us
        </div>


        </div>

        <br /><br />
        <div className="">
            <h2 className="font-semibold text-xl md:text-2xl">Competitions</h2>
            <br />
            <br />

            <div className="flex flex-col  gap-10  md:flex-row">
            <CompetitionCard/>
            <CompetitionCard/>
            <CompetitionCard/>
            </div>
        </div>


        <br /><br />
        <br /><br />
        <div className="">
            <h2 className="font-semibold text-xl md:text-2xl">Other Competitions</h2>
            <br />
            <br />

            <div className="flex flex-col  gap-10  md:flex-row">
            <CompetitionCard/>
            <CompetitionCard/>
            <CompetitionCard/>
            </div>
        </div>

        </div>


        <br /><br />

            <CustomModal
               modalIsOpen={open}
               setModalIsOpen={setOpen}
            > 
            <CompetitionDetail />
            </CustomModal>
        </GeneralLaout>
    )
}

export default Competitions


const CompetitionCard =()=>{
    return (


<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={DummyImage.src} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                First Ever Competitions thing
            </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Competition Ends 19 May</p>
        <a href="#" className="">
            Read more
        </a>
    </div>
</div>

    )
}


const CompetitionDetail =() =>{


    return (
        <div className="p-4" style={{'backgroundColor':'#f2f2f2',}}>
            <h2 className="text-xl	font-semibold p-2">Technische Universität Berlin (TUB)</h2>
            {/* <div>
            </div> */}
           <div className="md:flex items-start gap-5 ">
            <div className=" md:w-1/2 md:h-[400px] md:object-cover" >
           <img className="rounded md:h-full" src={DummyImage.src} alt=""  />

            </div>
            <div className="py-4 md:w-1/2">
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
                <p className="bg-white rounded-full  p-3 my-2">Organizer: Keystone Education Group</p>
            </div>
           </div>
        </div>
    )
}