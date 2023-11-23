import Link from "next/link";
import { usePathname } from 'next/navigation'


const SectionOne = () => {
  const pathname = usePathname();
  console.log({pathname})
  return (
    <div>
      <div className="max-w-[1200px] px-3 md:px-0 mx-auto pt-[72px] pb-[122px]">
        <div className="pt-[45px]">
          <div className="flex justify-center">
            <div className="relative w-fit mb-14">
              <h2 className="text-2xl text-center md:text-[32px] font-bold pb-3">
                Privacy Policy
              </h2>
              <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-20 md:left-0 rounded-[40px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 md:flex-row">
          <div className="md:pr-12 md:w-[280px] w-full">
            <div className="w-full py-4 pl-4 md:pl-0 md:py-0 border rounded-[5px] mb-1">
              <Link
                to="/terms-conditions"
                className={`block whitespace-nowrap text-black text-sm font-semibold md:px-[15px] md:py-3.5 ${
                  pathname !== "/terms-conditions" && "opacity-40"
                }`}
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="w-full py-4 pl-4 md:pl-0 md:py-0 border rounded-[5px]">
              <Link
                to="/privacy-policy"
                className={`block whitespace-nowrap text-black text-sm font-semibold md:px-[15px] md:py-3.5 ${
                  pathname !== "/privacy-policy" && "opacity-40"
                }`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">INTRODUCTION</p>
              <p className="">
                Welcome to Trades Trek <b>(“We” “Us” “Our”)</b> Privacy Notice{" "}
                <b>(“Notice”)</b>. We understand how important your personal
                information is to you and are committed to protecting your
                persona information. This Notice provides information about how
                we collect, use and share your personal information. Please read
                the whole Notice to understand how we process your personal
                information.
              </p>
            </div>
            {/* Row 2 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                DATA PROTECTION OFFICER (DPO)
              </p>
              <p className="">
                We have in compliance with the Data Protection Act, 2023
                appointed a Data Protection Officer to guide and manage our
                processing activities. If you have any question and issue
                regarding this Notice, kindly contact our DPO
              </p>
            </div>
            {/* Row 3 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                INFORMATION WE COLLECT ABOUT YOU
              </p>
              <p className="">
                Personal information is any information that identifies or that
                can identify you. The personal information we process about you
                depends on your interaction with us. For the services we render
                we process the following information:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>
                  <b>Signup/ subscription:</b> When you sign up on our platform
                  for investment training and trading, we will collect your
                  personal information such as your name, email address, phone
                  number, date and time as well as service type.
                </li>
                <li>
                  <b>Contract or Business information:</b> when we enter into a
                  contract or business relationship with you, we will collect
                  information about the business, the contracts, the signatures,
                  names, feedback, incorporation documents, Tax ID, details of
                  directors and shareholders, utility bills amongst others.
                </li>
                <li>
                  <b>Investment/Trading Data:</b> We may collect your trading
                  data or investment information when you subscribe and carryout
                  trading in our platform.
                </li>
                <li>
                  <b>Recruitment information:</b> When you apply to work with us
                  or we call for application from potential candidates, we will
                  collect information about your name, phone number, email
                  address, curriculum vitae, cover letter.
                </li>
                <li>
                  <b>Marketing/communication information:</b> We use this information to respond to your inquiries and market our products and services to you. They include, phone number, call log, email address, email content and social media account.
                </li>
                <li>
                  <b>Technical information:</b> when you visit our platform, our servers may automatically log the information provided by your web browser. The information includes your device internet protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, the location and other details about your visit.
                </li>
                <li>
                  <b>Financial information:</b> When we enter into business relationship with you or wants to reward you, we may process your financial information in order to facilitate payment for the reward or services rendered.
                </li>
                <li>
                  <b>Other information:</b> we collect your information for judicial proceedings. The information collected will depend on the nature of the case.
                </li>
              </ul>
              <p>
              <b>Information About other people</b><br />
If you provide information to us about any person other than yourself, your employees, counterparties, your advisers or your suppliers, you must ensure that they understand how their information will be used, and that they have given their consent for you to disclose it to us and for you to allow us, and our outsourced service providers to use it.
              </p>
            </div>
            {/* Row 4 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
              SOURCES WE COLLECT YOUR PERSONAL DATA FROM
              </p>
              <p className="">
              We use different methods to collect personal data from you and they include:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>
                  <b>Direct interactions:</b>You may give us your personal data when you sign up into our website or our services, communicate with us or create trading account with us.
                </li>
                <li><b>Automated technological interactions:</b>We collect these personal data as you interact with our website. These include personal data about your equipment, browsing actions and patterns, location data. We collect this personal data by using cookies, server logs and other similar technologies. </li>
                <li><b>Third parties or publicly available sources:</b>We may receive personal data about you from various third parties and public sources available to us such as your financial institution, open government sources, agencies amongst others.</li>
              </ul>
            </div>
            {/* Row 5 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">OUR PURPOSE AND LEGAL BASES FOR PROCESSING PERSONAL INFORMATION</p>
              <ul className="mb-2 list-disc md:pl-2" >
                <li>We collect your contact and business information in order to execute the contract we have with you or take pre contractual steps on your behalf. Our legal basis for processing this information is the performance of contract between you and us. Where the service is to be offered to a child, we will obtain the parent or guardian&apos;s consent.</li>
                <li>We collect your communication information for the purpose of responding to your queries and sending marketing our products. We rely on performance of contract to process your personal information for purposes of providing responses to your query. We rely on our legitimate interest to market our product and services to you.</li>
                <li>We process your registration details in order to grant you access to our trading platform and onboard you into our learning activities. Our lawful basis for processing this information is the performance of contract between you and us.</li>
                <li>We process your technical data in order to track traffic in our website and for the functionality of our website. We obtain your consent before processing this information.</li>
                <li>We collect your personal information to carry out customer due diligence (KYC). Our lawful basis for process this information is the compliance with legal obligation.</li>
                <li>We process your recruitment information in order to carryout employment exercise and other activities associated with recruitment. We rely on our own legitimate interest to process this information.</li>
                <li>We process your personal information to comply with legal requirements and our legal basis for processing the personal data is legal obligation.</li>
                <li>We process your financial information in order to facilitate payment for services rendered.</li>
                <li>We process your personal information to investigate, prosecute and defend our legal right. We are relying on our legitimate interest to process this information.</li>
              </ul>
              <p className="font-bold">
              Further Purpose
              </p>
              <p>We will only process your personal data for the particular purposes for which we collect it. We will notify you and rely on an appropriate lawful basis if we intend to use it for another purpose and such further purpose is not compatible to the original purpose.</p>
            </div>
            {/* Row 6 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">WHO DO WE SHARE YOUR PERSONAL INFORMATION WITH?</p>
              <p className="">
              We may share your personal information with a third party in order to fulfil a contract between you and a third party or where you have authorized us to do so. We also share your personal information with the following third parties:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>Financial institution</li>
                <li>Our Partner companies</li>
                <li>Regulators</li>
                <li>Service providers</li>
                <li>Judicial authorities</li>
              </ul>
            </div>
            {/* Row 7 */}
            {/* <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
              COOKIES
              </p>
              <p className="">
              We use cookies and other tracking technologies on our website. Cookies are small pieces of text that are saved on your Internet browser when you use our website. The cookies are sent back to our computer each time you visit our website. Cookies make it easier for us to give you a better experience online. You can stop your browser from accepting cookies, but if you do, some parts of our website or online services may not function appropriately. Please read our comprehensive cookies policy for more information.
              </p>
            </div> */}
            {/* Row 8 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">THIRD-PARTY LINKS</p>
              <p className="">
              This Policy applies to our Site only and does not cover third-party links. Our Site may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share information about you. We do not control these third-party websites and are not responsible for their Privacy Notice. When you leave our website, we encourage you to read the Privacy Notice of every website you visit.
              </p>
            </div>
            {/* Row 9 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">DO WE TRANSFER YOUR PERSONAL INFORMATION OUTSIDE NIGERIA?</p>
              <p className="">
              We do not transfer personal information outside Nigeria. However, in the instance that we transfer your personal information outside Nigeria. We will adopt appropriate transfer mechanism and ensure that your personal information is protected in the country or organization where it is transferred. Kindly contact us [ ] for more information on our international transfer of personal data.
              </p>
            </div>
            {/* Row 10 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
              HOW LONG DO WE KEEP YOUR PERSONAL INFORMATION?
              </p>
              <p className="">
              We will only retain your personal data for as long as is reasonably necessary to fulfill the purposes for which they are collected. We will also retain it where the law requires us to retain it and where we are required to assert or defend against legal claims. To learn more about our retention periods as established in our retention policy, please contact us []
              </p>
            </div>
            {/* Row 10 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">DATA SECURITY</p>
              <p className="">
              We strongly care about your personal information in our custody and have put in place organizational and technical measures such as Hypertext, Transfer Protocol Secure (HTTPS), firewall, access based and antimalware to secure your personal information. We do not guarantee 100% protection, but we will strive to ensure maximum protection of personal information in us.
              </p>
            </div>
            {/* Row 11 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">YOUR LEGAL RIGHTS</p>
              <p className="">
              You have certain rights under the law which we respect and adhere to and which can be exercised by you at any time. However, note that these rights are not absolute and may only apply in certain circumstances. Your rights are as itemized:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>right to access your personal data</li>
                <li>right to request correction of your personal</li>
                <li>right to request the erasure of your personal data</li>
                <li>right to object to the processing of your personal data especially with regards to direct marketing</li>
                <li>right to request the restriction of processing of your personal data pending the rectification of accuracy of your personal data</li>
                <li>right to request transfer of your personal data to another controller or to you.</li>
                <li>right to withdraw consent</li>
              </ul>
              <p><b>What we may need from you</b></p>
              <p>
              We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data or to exercise any of your other rights. This is a security measure to ensure that personal information is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
              </p>
            </div>
            {/* Row 12 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">RIGHT TO COMPLAINT</p>
              <p className="">
              Kindly note that you have the right to make a complaint at any time to the Nigeria Data Protection Commission (NDPC), the Regulator for data protection in Nigeria <a href="https://ndpb.gov.ng/" rel="noreferrer" target="_blank">(https://ndpb.gov.ng/)</a> or approach competent court of law to enforce your data protection rights. We would, however, appreciate the chance to deal with your concerns before you approach the NDPC, so please contact us in the first instance.
              </p>
            </div>
            {/* Row 13 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
              CHANGES TO OUR PRIVACY NOTICE
              </p>
              <p className="">
              This Privacy Notice will be updated from time to time to reflect our processing activities and we will aim to notify you when this happens.
              </p>
            </div>
            {/* Row 14 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
              CONTACT US
              </p>
              <p className="">
              All comments, questions, access requests, complaints, and other requests regarding the Privacy Notice should be sent to our email at [ ]. We may request additional details from you regarding your complaints and keep records of your requests and resolutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
