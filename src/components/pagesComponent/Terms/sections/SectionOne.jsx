import Link from "next/link";
import { usePathname } from 'next/navigation'


const SectionOne = () => {
  const pathname =usePathname();
  return (
    <div>
      <div className="max-w-[1200px] px-3 md:px-0 mx-auto pt-[72px] pb-[122px]">
        <div className="pt-[45px]">
          <div className="flex justify-center">
            <div className="relative w-fit mb-14">
              <h2 className="text-2xl text-center md:text-[32px] font-bold pb-3">
                Terms and Conditions
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
                These Terms and Conditions <b>(“Terms”)</b> constitute an
                agreement between users <b>(“you”. “your”)</b> of this platform
                and Trades Trek <b>(the “Company”, “We”, “Us” “Our”)</b>. By
                registering an account on Trades Trek, you unconditionally agree
                to be bound by these Terms. If you do not agree with any of
                these Terms, please desist from using Trades Treks platform.
                Please note that these terms may be updated at any time. Your
                continued use of Trades Trek platform will be deemed as an
                irrevocable acceptance of any revisions. However, we will strive
                to notify you of any changes to these terms which significantly
                affect your rights and obligations.
              </p>
            </div>
            {/* Row 2 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                OUR PRODUCTS AND OFFERINGS
              </p>
              <p className="">
                Trades Trek is an investment platform that provides users with
                opportunity to invest and trade stocks with ease. The platform
                also provides investment education and resources to users. The
                aim of the platform is to simplify investment by providing
                training and necessary market toolkits that enables users to buy
                and sell stock, track their investments, receive real-time
                market updates and execute trades with just a few taps.
                <br /> Our trading services is supported by third party
                investment partners duly licensed to provide investment
                services. We do not accept investment but only makes platform
                available for users to carryout trading in a simplified manner.
                Therefore, you acknowledge and agree that you are purchasing and
                selling stocks in a third-party partner&apos;s platform and
                maybe required to enter into separate agreement with them. We
                will not be liable for issues arising from your relationship
                with our third party that we do not have direct control for.
              </p>
            </div>
            {/* Row 3 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">ELIGIBILITY</p>
              <p className="">
                To be eligible for the use of Trades Trek platform, you must:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>register an account with valid information.</li>
                <li>
                  provide a valid mobile phone number and agree to the creation
                  of an account associated with such numbers.
                </li>
                <li>
                  Submit additional information as Trades Trek may request.
                </li>
                <li>
                  You will have the choice to receive a distinctive PIN for the
                  purpose of getting access to your account. It is your
                  responsibility to ensure the security of your PIN and
                  password.
                </li>
              </ul>
              <p>
                It is your reasonability ensure that all persons who access the
                Platform through your account are aware of these Terms and
                comply with them. You have the obligation of keeping your
                account secure by maintaining the confidentiality of your
                password and account. You agree to immediately notify us of any
                unauthorised use of your account or breach of any security of
                your account. You acknowledge that you will be liable for any
                breach, damages or issues that may arising from the sharing of
                your account details with a third party.
              </p>
              <p>
                Further, you authorize Trades Trek to directly or through the
                use of a third party or parties, make any inquiries we consider
                necessary to verify your identity and/or your transaction and/or
                protect against fraud, including to query identity information
                contained in public reports (e.g., your name, address, past
                addresses, or date of birth), to query account information
                associated with your linked bank account (e.g., name or account
                balance), and to take action we reasonably deem necessary based
                on the results of such inquiries and reports. You further
                authorize any and all third parties to which such inquiries or
                requests may be directed to fully respond to such inquiries or
                requests.
              </p>
            </div>
            {/* Row 4 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                SECURITY OF ACCOUNT
              </p>
              <p className="">
                Trades Trek remains committed to the security of the platform,
                user data, and user assets; however, it is important that users
                treat the login credentials used to access the platform as
                confidential information and avoid disclosure to any other
                party, or parties. We recommend that you use appropriate, up to
                date security software, two factor authentication and the latest
                version of any mobile applications we publish from time to time.
                As a user, you hereby agree that you are totally responsible for
                the security of your account and its login credentials and that
                Trades Trek shall not be liable for any loss or damage caused by
                authorized or unauthorized use of your login credentials. You
                also acknowledge that you understand that Trades Trek will never
                ask for your login credentials via email, SMS, social media,
                instant messenger, or any other channel.
              </p>
            </div>
            {/* Row 5 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">ACCESS TO THE SITE</p>
              <p className="">
                Subject to these Terms, Company grants you a non-transferable,
                non-exclusive, revocable, limited license to use and access the
                Site solely for your own personal, non-commercial use. The
                rights granted to you in these Terms are subject to the
                following restrictions: (a) you shall not license, sell, rent,
                lease, transfer, assign, distribute, host, or otherwise
                commercially exploit the Site, whether in whole or in part, or
                any content displayed on the Site; (b) you shall not modify,
                make derivative works of, disassemble, reverse compile or
                reverse engineer any part of the Site; (c) you shall not access
                the Site in order to build a similar or competitive website,
                product, or service; and (d) except as expressly stated herein,
                no part of the Site may be copied, reproduced, distributed,
                republished, downloaded, displayed, posted or transmitted in any
                form or by any means. Unless otherwise indicated, any future
                release, update, or other addition to functionality of the Site
                shall be subject to these Terms. All copyright and other
                proprietary notices on the Site (or on any content displayed on
                the Site) must be retained on all copies thereof
              </p>
            </div>
            {/* Row 6 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">SUBSCRIPTION</p>
              <p className="">
                Although registration in the platform is free, access to certain
                features can only be granted upon completion of subscription.
                Trades Trek has different subscription plans and each user is
                allowed to choose the subscription plan that best suits the
                users need and pay the stipulated amount. None payment or
                renewal of the subscription will entitle Trades Trek to disable
                users access to the subscription features and benefits.
              </p>
            </div>
            {/* Row 7 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                SERVICE COMMUNICATIONS
              </p>
              <p className="">
                If you have questions, concerns, or requests concerning our
                services, please reach contact us at [ ]. Trades Trek may reach
                out to you regarding your Trades Trek account and the services
                it offers through various means such as email, instant
                messaging, phone calls, text messages (SMS), or other
                communication methods. If you wish to stop receiving promotional
                messages, you can opt out by clicking the unsubscribe section of
                the email or send an email to us [ ]
              </p>
            </div>
            {/* Row 8 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">REWARDS</p>
              <p className="">
                Trades Trek offers referral program whereby users who
                successfully refer another user who subscribes to the platform,
                will be entitled to 20% [ ]. Also, top ranking users in the
                leaderboard based on their trade performance level will be
                entitled to [ ] reward.
              </p>
            </div>
            {/* Row 9 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">MATERIALS</p>
              <p className="">
                All content and materials provided on the Platform, including
                but not limited to articles, videos, webinars, charts and any
                other educational resources <b>(“Material” or “Content”)</b>,
                are for informational purposes only. No Material on the platform
                shall be construed as making any recommendation or investment
                advice of any kind whatsoever. You are solely responsible for
                evaluating the merits and risks associated with the use of any
                Material provided on the platform. You are advised to seek
                expert opinion before relying on any of the Material or Content.
                Therefore, you acknowledge and agree that you shall not hold us
                liable for any claim or damage arising from any decision you
                make based on the Material provided on the platform.
              </p>
            </div>
            {/* Row 10 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                PROHIBITED ACTIVITIES
              </p>
              <p className="">
                The use of the Trade Trek platform, or its services, or provided
                API prohibits that you do not:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>
                  use the Platform for committing fraud or any unlawful and/or
                  illegal purposes;
                </li>
                <li>
                  reproduce, duplicate, copy, sell, resell or exploit any
                  portion of the Platform;
                </li>
                <li>
                  upload, post, email, transmit or otherwise make available any
                  content that is unlawful, harmful, threatening, abusive,
                  harassing, torturous, defamatory, vulgar, obscene, libelous,
                  invasive of another&apos;s privacy, hateful, or racially,
                  ethnically or otherwise objectionable through the Platform;
                </li>
                <li>use the Platform to harm or injure any third party;</li>
                <li>impersonate any person or entity, on the Platform;</li>
                <li>
                  forge headers or otherwise manipulate identifiers in order to
                  disguise the origin of any content transmitted through the
                  Platform;
                </li>
                <li>
                  upload, post, email, transmit or otherwise make available any
                  content that you do not have a right to make available under
                  any law or under contractual or fiduciary relationships (such
                  as inside information, proprietary and confidential
                  information learned or disclosed as part of employment
                  relationships or under nondisclosure agreements);
                </li>
                <li>
                  upload, post, email, transmit or otherwise make available on
                  the Platform, any content that infringes any patent,
                  trademark, trade secret, copyright or other proprietary rights
                  of any party;
                </li>
                <li>
                  upload, post, email, transmit or otherwise make available on
                  the Platform, any unsolicited or unauthorized advertising,
                  promotional materials, &quot;junk mail,&quot;
                  &quot;spam&quot;, &quot;chain letters,&quot; &quot;pyramid
                  schemes,&quot; or any other form of solicitation;
                </li>
                <li>
                  upload, post, email, transmit or otherwise make available on
                  the Platform, any material that contains software viruses or
                  any other computer code, files or programs designed to
                  interrupt, destroy or limit the functionality of any computer
                  software or hardware or telecommunications equipment;
                </li>
                <li>
                  disrupt the normal flow of or otherwise act in a manner that
                  negatively affects other user&apos;s ability to engage in real
                  time exchanges;
                </li>
                <li>
                  interfere with or disrupt the Platform or servers or networks
                  connected to the Platform, or disobey any requirements,
                  procedures, policies or regulations of networks connected to
                  the Platform;
                </li>
                <li>
                  intentionally or unintentionally violate any applicable local,
                  state, national or international laws and any regulations
                  having the force of law.
                </li>
              </ul>
              <p>
                You hereby acknowledge that Trades Trek reserves the right to
                restrict or terminate access to your Trades Trek account or take
                legal actions upon the reasonable suspicion or conviction that
                you have carried out any of the prohibited activities.
              </p>
            </div>
            {/* Row 10 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">REWARDS</p>
              <p className="">
                Trades Trek offers referral program whereby users who
                successfully refer another user who subscribes to the platform,
                will be entitled to 20% [ ]. Also, top ranking users in the
                leaderboard based on their trade performance level will be
                entitled to [ ] reward.
              </p>
            </div>
            {/* Row 11 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">PROPRIETARY RIGHTS</p>
              <p className="">
                You acknowledge and agree that Trades Trek is the exclusive
                owner of all intellectual property rights, including the Trades
                Trek platform, services, logos, trade names, brand names,
                designs, and necessary software used in connection with the
                Trades Trek platform. However, any proprietary rights associated
                with third-party logos, trade names, brand names, and designs
                shall belong to those third parties. The Trades Trek platform
                may feature proprietary logos, service marks, and trademarks
                owned or used by the Company or others. Trades Trek is not
                granting you any license to use these proprietary marks by
                displaying them on the platform, and unauthorized use may
                violate intellectual property laws. You understand and
                acknowledge that Trades Trek owns the platform, and these Terms
                do not transfer any ownership, rights, or title from the Trades
                Trek to you or any third party.
              </p>
            </div>
            {/* Row 12 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">PRIVACY POLICY</p>
              <p className="">
                We take the privacy of your information seriously and dedicated
                to protecting and securing your data. Please click the link{" "}
                <i>
                  <Link to="/privacy-policy">privacy policy</Link>
                </i>{" "}
                to read more about how we manage your personal information.
              </p>
            </div>
            {/* Row 13 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                ACCOUNT MONITORING, SUSPENSION, OR TERMINATION
              </p>
              <p className="">
                Upon probable cause to believe that you have acted in violation
                of these Terms, we may suspend or terminate your account with
                the platform. Such circumstances may include:
              </p>
              <ul className="mb-2 list-disc md:pl-2">
                <li>
                  That any content or material or asset submitted or shared by
                  you in or through the Trades Trek platform violates these
                  Terms of use or the intellectual property rights, other
                  property rights, or the right to privacy of any third party.
                </li>
                <li>
                  We have reason to believe that your use of the Trades Trek
                  platform is in violation of any applicable law or regulation,
                  or that you are using the services in a fraudulent manner or
                  otherwise contrary to the purpose of this Agreement.
                </li>
                <li>
                  We have reason to believe that you have supplied false,
                  misleading, or deceptive information in connection with your
                  registration, identity verification, transactions, or any
                  other use of the services, either to us or to another user.
                </li>
                <li>
                  You have not responded to our inquiries or supplied the
                  information requested by us within a reasonable period of
                  time.
                </li>
                <li>
                  We are required to do so under any applicable law, regulation,
                  or an order issued by an authority.
                </li>
                <li>
                  If we determine that you have at any previous point in time
                  violated this Agreement or any other agreement that you have
                  entered into with us.
                </li>
              </ul>
              <p>
                Upon the occurrence of ANY of the above, Trades Trek shall
                immediately close, suspend or limit your account.
              </p>
            </div>
            {/* Row 14 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                DISCLAIMERS AND LIABILITY LIMITATION
              </p>
              <p className="">
                Trades Trek does not make any express or implied warranties
                about platform, including but not limited to implied warranties
                of merchantability, fitness for a particular purpose, or
                non-infringement. Platform is made available to you &quot;as
                is&quot; and &quot;as available&quot; and company does not
                warrant that any defects or inaccuracies will be corrected.
                Company does not warrant that platform will meet your needs, or
                that they will be uninterrupted, timely, secure or error-free.
                Company also makes no warranty that the results obtained from
                the use of platform will be accurate or reliable, or that the
                quality of any products, services, information, or other
                material purchased or obtained by you through platform will meet
                your expectations.
              </p>
              <p>
                Trades Trek will not be liable to you or anyone else for any
                consequential, incidental, special, direct, or indirect damages
                (including but not limited to lost profits, trading losses or
                damages that result from use or loss of use of platform and
                third-party content, inconvenience or delay). This is true even
                if company has been advised of the possibility of such damages
                or losses. Company will not be liable to you or anyone else for
                any loss resulting from a cause over which such company does not
                have direct control. This includes failure of electronic or
                mechanical equipment or communications lines (including
                telephone, cable and internet), unauthorized access, viruses,
                theft, operator errors, severe or extraordinary weather
                (including flood, earthquake, or other act of God), fire, war,
                insurrection, terrorist act, riot, labor dispute and other labor
                problems, accident, emergency or action of government
              </p>
            </div>
            {/* Row 15 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">INDEMNIFICATION</p>
              <p className="">
                You will indemnify and hold harmless Company and Third Party ,
                and the officers, directors, agents, partners, employees,
                licensors, distributors, and representatives of Company and the
                Third Party, from and against any and all claims, demands,
                actions, causes of action, suits, proceedings, losses, damages,
                costs, and expenses, including reasonable attorneys&apos; fees,
                arising from or relating to your access and/or use of, or
                interaction with the Content (including, without limitation,
                Third Party Content), or any act, error, or omission of your use
                of your account or any user of your account, in connection
                therewith, including, but not limited to, matters relating to
                incorrect, incomplete, or misleading information; libel;
                invasion of privacy; infringement of a copyright, trade name,
                trademark, service mark, or other intellectual property; any
                defective product or any injury or damage to person or property
                caused by any products sold or otherwise distributed through or
                in connection with the Service; or violation of any applicable
                law.
              </p>
            </div>
            {/* Row 16 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">
                COMPLIANCE AND RISK CONTROL
              </p>
              <p className="">
                In line with the Anti-Money Laundering and Combating Terrorism
                Financing, we have the authority to monitor your transactions on
                our platform and your use of our platform for any transaction or
                activity. Where we suspect a transaction to be risky, we may
                temporarily place them as pending and request additional
                documents or information. You agree that we reserve the right to
                request additional documents and information that support your
                transactions. We reserve the right to investigate you and your
                transactions if we deem your activities to be fraudulent.
              </p>
            </div>

            {/* Row 17 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">CHANGE TO TERMS</p>
              <p className="">
                We reserve the right, at Our sole discretion, to modify or
                replace these Terms at any time. When we update these terms, we
                will make effort to notify you. By continuing to access or use
                Our Service after those revisions become effective, you agree to
                be bound by the revised terms. If You do not agree to the new
                terms, in whole or in part, please stop using the Site and the
                Services.
              </p>
            </div>
            {/* Row 18 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">GRIEVANCE POLICY</p>
              <p className="">
                Trades Trek believes in providing excellent service and strives
                to be sincere and transparent in its approach to customer
                service. Your confidence in us is of paramount importance to us
                and we would never place our personal growth before your
                interest. We ensure a simply incredible and user-friendly
                experience for all our customers and in case of any complaint or
                concern, we do everything we can to fix them. Trades Trek has
                developed a procedure for prompt attention to the grievances of
                its customers with respect to various issues by setting up a
                “customer support” and “a dispute resolution mechanism”.
                Customers can give their complaints/feedback only by sending an
                email to [ ]. You hereby agree that you are aware of our
                customer support channels, and we&apos;re not liable for any
                damage or loss as a result of using any other unrecognized
                channel.
              </p>
            </div>
            {/* Row 19 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">GOVERNING LAW</p>
              <p className="">
                This Agreement and the rights and obligations of the Parties
                hereunder shall be governed by and interpreted and construed in
                accordance with the laws of the Federal Republic of Nigeria.
              </p>
            </div>
            {/* Row 20 */}
            <div className="mb-8">
              <p className="text-xl font-semibold mb-2.5">CONTACT DETAILS</p>
              <p className="">Email: [ ]</p>
              <p>Phone Numbers: [ ]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
