import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Phone from '@/assets/phone-2.png';
import { GiWorld } from "react-icons/gi";

type Prop ={
    data:{
        linkText:string,
        linkIcon:React.ReactElement;
        id:string,
        content:{
            title:string,
            body:string,
            img:string
        }
    }[]
}

const MiniNavWithDisPlay = ({data}:Prop):React.ReactElement=>{
    const [openDrop,setOpenDrop] = useState(false)
    return (
        <Tabs.Root
        className="md:flex md:gap-10"
        defaultValue='tab1'
      >
                {/* start mobile nav component */}
    
        <Tabs.List className="relative text-white bg-palette-two container p-4 mx-auto my-4 dropdownBtn md:hidden md:" aria-label="Manage your account"
        onClick={e=>{
            // @ts-ignore
            if(Array.from(e.target.classList).includes('dropdownBtn')){
                setOpenDrop(!openDrop)
            }
        }}
        >
            {openDrop?'close Dropdown':'Dropdown'}
            <div className={`${openDrop?'absolute':'hidden'} top-[50px] left-0 text-black bg-white w-full flex flex-col  shadow-xl`}>
    
            <Tabs.Trigger
            className="outline-none	"
            value={'tab1'}
            onClick={e=>{
                console.log('do something')
                setOpenDrop(false)
            }}
          >
            Multu-lingual Support
          </Tabs.Trigger>
    
            </div>
        </Tabs.List>
        <Tabs.List className='hidden md:block w-1/3 shrink-0'>
    
            <Tabs.Trigger
                        className="outline-none	w-full rounded flex gap-5 items-center py-4 data-[state=active]:text-red "
                        value={'tab1'} 
                        >
                        <GiWorld/>
                        <span>
                        Multu-lingual Support
                        </span>
            </Tabs.Trigger>
            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab2'} 
                >
                <GiWorld/>
                <span>
                People Directory
                </span>
            </Tabs.Trigger>

            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab2'} 
                >
                <GiWorld/>
                <span>
                Link to rep
                </span>
            </Tabs.Trigger>

            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab1'} 
                >
                <GiWorld/>
                <span>
                Event Competitions
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab1'} 
                >
                <GiWorld/>
                <span>
                Event Competitions
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab1'} 
                >
                <GiWorld/>
                <span>
                Event Competitions
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab1'} 
                >
                <GiWorld/>
                <span>
                Event Competitions
                </span>
            </Tabs.Trigger>
            <Tabs.Trigger
                className="outline-none	w-full rounded flex gap-5 items-center py-4 hover:text-red"
                value={'tab1'} 
                >
                <GiWorld/>
                <span>
                Event Competitions
                </span>
            </Tabs.Trigger>
        </Tabs.List>
    
        <Tabs.Content
                    className="md:w-2/3 grow"
                    value={'tab1'}
                  >
                    {/* start display content */}
                    <div className='bg-palette-one rounded p-4 py-8 md:flex md:items-center md:justify-center md:gap-5'>
                <img src={Phone.src} alt="" className='mx-auto block'/>
                <div>
                <h3 className='p-4 text-center font-semibold md:text-left md:text-2xl md:px-0'>People Directory</h3>
                <p className='text-center px-2 md:text-left md:px-0'>
                With remote, dispersed, deskless employees not having access to networked systems and managing updates centrally, keeping an up-to-date directory of employee contact details can be problematic! With Thrive.Apps People Directory, all employees have access to a directory. The directory can be managed by both the business and the employees so contact information can be kept up-to-date and readily accessible.
                </p>
                </div>
                </div>
                {/* end display content */}
                  </Tabs.Content>
               
    
      </Tabs.Root>
)
}





export default MiniNavWithDisPlay