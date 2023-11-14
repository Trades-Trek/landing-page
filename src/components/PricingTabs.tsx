import React from "react"
import * as Tabs from '@radix-ui/react-tabs';

type Prop ={
    billedYearly?:React.ReactElement,
    billedQuaterly?:React.ReactElement,
}

const PricingTabs = ({billedQuaterly=<div></div>,billedYearly=<div></div>}:Prop)=>{


    return (
        <Tabs.Root
        className="flex flex-col w-full bg-[#F6F7F8F7]"
        defaultValue="tab1"
      >

        <Tabs.List className="shrink-0 flex md:w-96 m-auto my-16 bg-white p-2 rounded-xl  shadow-sm" aria-label="Manage your account"  >
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px]
            leading-none text-mauve11 select-none  hover:text-violet11 data-[state=active]:text-violet11 
           cursor-default data-[state=active]:bg-[#8C1AFF] 
             data-[state=active]:text-white"
            value="tab1"
            style={{'outline':'none'}}

          >
           Billed yearly
          </Tabs.Trigger>
          {/* data-[state=active]:shadow-current 
             data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] */}
             {/*  */}
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px]
             leading-none text-mauve11 select-none  hover:text-violet11 data-[state=active]:text-violet11 
            cursor-default data-[state=active]:bg-[#8C1AFF] 
              data-[state=active]:text-white"
            value="tab2"
            style={{'outline':'none'}}
          >
           Billed Quarterly
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow p-5  rounded-b-md outline-none "
          value="tab1"
        >
            {billedQuaterly}
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5  rounded-b-md outline-none "
          value="tab2"
        >
           {billedYearly}
        </Tabs.Content>
      </Tabs.Root>
    )
}

export default PricingTabs