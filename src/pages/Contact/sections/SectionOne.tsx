import React from "react";
import { useState } from "react";
// @ts-ignore
import Illustrate1 from "../../../assets/Images/Contact/Illustrate1.png";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import InputWithLabel from '../../../components/InputWithLabel';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation } from "react-query";
import { phoneRegExp } from "../../JoinWaitList/JoinWaitList";
import { GenegralResponseAndError, submitContactApi } from "../../../api/general.api";



const schema = yup.object({
  'first_name':yup.string().required(),
  'last_name':yup.string().required(),
  'subject':yup.string().required(),
  'message':yup.string().required(),
  'email':yup.string().email().required(),
  'phone':yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
})
export type ContactI = yup.InferType<typeof schema>
const SectionOne = () => {
 

  // const emailjsConfig = {
  //   USER_ID: import.meta.env.VITE_USER_ID,
  //   SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
  //   TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
  // };
  // const [loading, setLoading] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   if(name===""){
  //     toast.error("Please, enter your name");
  //     setLoading(false);
  //     return;
  //   }
  //   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //   if(!emailRegex.test(email)){
  //     toast.error("Please, enter a valid email address");
  //     setLoading(false);
  //     return;
  //   }
  //   if(body===""){
  //     toast.error("Please, enter your message");
  //     setLoading(false);
  //     return;
  //   }

  //   emailjs
  //     .send(
  //       emailjsConfig.SERVICE_ID,
  //       emailjsConfig.TEMPLATE_ID,
  //       {
  //         name: name,
  //         email: email,
  //         message: body,
  //       },
  //       emailjsConfig.USER_ID
  //     )
  //     .then((response) => {
  //       console.log("Email sent:", response);
  //       toast.success("You Message has been successfully sent");
  //       setLoading(false);
  //       setEmail("");
  //       setBody("");
  //       setName("");
  //     })
  //     .catch((error) => {
  //       console.error("Email could not be sent:", error);
  //       toast.error("An Error Occurred, Please try send the message again");
  //       setLoading(false);
  //     });
  // };

  const {mutate ,isLoading:loading} = useMutation(submitContactApi,GenegralResponseAndError)

  const { register, handleSubmit, setValue,formState: { errors } } = useForm<ContactI>({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data:ContactI)=>{
    mutate(data)
    console.log({'Contact Us':data})
  }
  return (
    <div className="w-full bg-palette-one">
      <div className="max-w-[1200px] mx-auto pt-10 pb-20 flex justify-center gap-x-[100px]">
        <img src={Illustrate1} alt="illustration" className="hidden md:block" />
        <form 
                    onSubmit={handleSubmit(onSubmit)}
        className="pt-5">
          <p className="mb-2 text-[32px] font-bold">Get in Touch with Us</p>
          <p className="mb-8 font-medium text-[#4E4B66]">
            We will receive your request
          </p>

          <div>
          <InputWithLabel 
                register={register('email')}
                errorMessage={errors.email?.message}
                label="Email"
                />
                <InputWithLabel 
                register={register('first_name')}
                label="First Name"
                errorMessage={errors.first_name?.message}
                />
                <InputWithLabel 
                register={register('last_name')}
                errorMessage={errors.last_name?.message}
                label="Last name"
                />
                <InputWithLabel 
                register={register('phone')}
                errorMessage={errors.phone?.message}
                label="Phone"
                />
                <InputWithLabel 
                register={register('subject')}
                errorMessage={errors.subject?.message}
                label="Subject"
                />
                <InputWithLabel 
                register={register('message')}
                errorMessage={errors.message?.message}
                label="Message"
                isTextArea={true}
                />


              <button
                type="submit"
                className="bg-palette-two font-bold w-full text-white rounded-[15px] h-[74px]"
              >
                {loading ? (
                  <div role="status">
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
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

        </form>
      </div>
    </div>
  );
};

export default SectionOne;
