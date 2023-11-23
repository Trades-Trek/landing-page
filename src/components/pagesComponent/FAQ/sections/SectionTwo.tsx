import React from "react";
import { useState } from "react";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import propTypes from "prop-types";
import { useQueries, useQuery } from "react-query";
import { getFaqApi } from "@/api/general.api";


const SectionTwo = ({ query }:any) => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const handleSelect = (id:any) => {
    if (selectedFaq === id) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(id);
    }
  };
  const [filter,setFilter] = useState<string|undefined>(undefined)
  const {isLoading,data:faqs,status} = useQuery(['getFaqApi',filter],()=>getFaqApi({'query':filter}),)
  const handleFilter =(value:string)=>{
    setFilter(`?subject=${value}`)
  }
  return (
    <div className="bg-[#F9F9F9] pt-[77px] pb-[75px] px-2 md:px-0 faq" id="faq">

      
      <div className="flex flex-col items-center justify-center gap-y-4">
        {/* // .filter(faq => faq.question.toLocaleLowerCase().includes(query.toLocaleLowerCase()))? */}
        
        <div className=" flex gap-4">
        <div className={`
        ${filter?.includes('sales')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px]  shadow rounded-3xl`}
        onClick={e=>{
          handleFilter('sales')
        }}
        >
          Sales
        </div>
        <div 
          onClick={e=>{
            handleFilter('team')
          }}
        className={`
        ${filter?.includes('team')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px]  shadow rounded-3xl`}
        >
          Team
        </div>
        <div 
        onClick={e=>{
          handleFilter('billing')
        }}
        className={`
        ${filter?.includes('billing')?'cursor-not-allowed bg-palette-two text-white':'cursor-pointer bg-white'} px-[25px]  shadow rounded-3xl`}>
          Billing
        </div>

        </div>
        {
        isLoading?
        <svg
        aria-hidden="true"
        className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>:""
      }
        {
        faqs?.map((faq, id) => (
          <div
            key={id}
            onClick={() => handleSelect(id)}
            className="w-full md:w-[740px] px-[25px] bg-white shadow rounded-3xl"
          >
            <div className="flex items-center justify-between py-4 gap-x-2">
              <p className="text-base font-medium md:text-2xl">
                {faq.question}
              </p>
              {selectedFaq === id ? (
                <BsDashCircle
                  className="text-base font-bold cursor-pointer md:text-2xl"
                  onClick={() => handleSelect(id)}
                />
              ) : (
                <BsPlusCircle
                  className="text-base font-bold cursor-pointer md:text-2xl"
                  onClick={() => handleSelect(id)}
                />
              )}
            </div>
            <div
              className={`text-xl overflow-hidden transition-all duration-500 ${
                selectedFaq === id ? "max-h-[1500px]" : "max-h-0"
              }`}
            >
              <div className="pb-4 text-sm md:text-base" dangerouslySetInnerHTML={{__html:faq.answer}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// SectionTwo.propTypes = {
//   query: propTypes.string
// }

export default SectionTwo;
