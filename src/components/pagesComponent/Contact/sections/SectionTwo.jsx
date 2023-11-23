import { useQuery } from "react-query";
import { getCompanyInfoApi } from "../../../api/general.api";

const SectionTwo = () => {
  const {isLoading,data} = useQuery('getCompanyInfoApi',getCompanyInfoApi,{cacheTime:10000 * 600 * 50})
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto py-12 flex justify-between items-center">
        <div>
          <p className="mb-1 text-2xl font-bold">Our Locations</p>
          <p className="font-medium text-[#4E4B66]">
            You can come visit us in Our Offices
          </p>
        </div>
        <div>
          <p className="text-lg font-medium">
            <strong>{data?.address_ln1}</strong>
          </p>
          <p className="text-lg font-medium">
             <strong>{data?.address_ln2}</strong>
          </p>

        </div>
      </div>
      <div className="w-full">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9498687026503!2d3.3698703!3d6.528016099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dad91bd4f25%3A0xe373f3720272bf51!2s25%20Isaac%20John%20St%2C%20Igbobi%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1696573826867!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6786129068432!2d3.3697865!3d6.5621903999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d860f5b2813%3A0xfeda8424f65ba37c!2s4%20Ayanboye%20St%2C%20Anthony%20100001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1697738027460!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SectionTwo;
