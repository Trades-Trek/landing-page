const CompetitionsRules = ()=>{

    return (
        <div>
          <div className="max-w-[1200px] px-3 md:px-0 mx-auto pt-[72px] pb-[122px]">
            <div className="pt-[45px]">
              <div className="flex justify-center">
                <div className="relative w-fit mb-14">
                  <h2 className="text-2xl text-center md:text-[32px] font-bold pb-3">
                    Competition Rules
                  </h2>
                  <div className="absolute bottom-0 w-[83px] h-[9px] bg-palette-two left-20 md:left-0 rounded-[40px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 md:flex-row">
              {/* <div className="md:pr-12 md:w-[280px] w-full">
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
                    Privacy Policyf
                  </Link>
                </div>
              </div> */}
              <div>
                {/* Row 2 */}
                {/* Row 3 */}
                <div className="mb-8">
                  <ul className="mb-2 list-disc md:pl-2">
                    <li>
                      <b>Eligibility:</b> Open to currently enrolled students of
                      FCET - Akoka.
                      <br />• Entry to the game may be closed at any time if the
                      game reaches capacity or for any other reason at the
                      discretion of TRADES TREK Limited.
                    </li>
                    <li>
                      <b>Free Subscription:</b> 3 Weeks from school roll out date.
                    </li>
                    <li>
                      <b>Competition Start and End Dates:</b>
                      <br />
                      • First competition <br />
                      START DATE: 29th January 2024 &nbsp;&nbsp;END DATE: 9th
                      February 2024
                      <br />
                      • 2ND Competition <br />
                      START DATE: 12th February 2024 &nbsp;&nbsp;END DATE: 23rd
                      February, 2024
                    </li>
                    <li>
                      <b>Initial Capital:</b> NGN 1,000,000 in virtual currency.
                    </li>
                    <li>
                      <b>Trading Assets:</b> Participants can trade in stocks listed
                      on the Nigerian Stock Exchange
                    </li>
                    <li>
                      <b>Trading Hours:</b>Align with the actual trading hours of
                      the Nigerian Stock Exchange.
                    </li>
                    <li>
                      <b>Restrictions on Trading Activity:</b> : Net profit and loss
                      will be calculated based on the difference between the opening
                      and closing portfolio values.
                    </li>
                    <li>
                      <b>Ranking System:</b> Participants will be ranked based on
                      the percentage increase in their portfolio value.
                    </li>
    
                    <li>
                      <b>Reporting and Transparency:</b> Regular updates on rankings
                      and portfolio values to be provided to all participants, in
                      the community
                    </li>
    
                    <li>
                      <b>Prohibited Activities:</b> Strictly ban any form of market
                      manipulation or unethical trading practices.
                    </li>
    
                    <li>
                      <b>Prizes:</b>
                      <br />
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th>Position</th>
                            <th> Price (NGN)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1st</td>
                            <td>30,000</td>
                          </tr>
                          <tr>
                            <td>2nd</td>
                            <td>20,000</td>
                          </tr>
                          <tr>
                            <td>3rd</td>
                            <td>20,000</td>
                          </tr>
                          <tr>
                            <td>4th</td>
                            <td>10,000</td>
                          </tr>
                          <tr>
                            <td>5th</td>
                            <td>5,000</td>
                          </tr>
                          <tr>
                            <td>6th</td>
                            <td>Free Subscription</td>
                          </tr>
                          <tr>
                            <td>7th</td>
                            <td>Free Subscription</td>
                          </tr>
                          <tr>
                            <td>8th</td>
                            <td>Free Subscription</td>
                          </tr>
    
                          <tr>
                            <td>9th</td>
                            <td>Free Subscription</td>
                          </tr>
    
                          <tr>
                            <td>10th</td>
                            <td>Free Subscription</td>
                          </tr>
                        </tbody>
                      </table>
                      <b>
                        NOTE: only users with an active premium subscription can win
                        prizes from the competitions
                      </b>
                    </li>
    
                    <li>
                      <b>Feedback and Learning:</b>We encourage participants to
                      share their strategies and learnings at the end of the
                      competition.
                    </li>
    
                    <li>
                      <b>
                        Portfolio Balances are reset after the end of the game
                        duration (2 weeks) to allow for fair competition.{" "}
                      </b>
                    </li>
    
                    <li>
                      <b>Dispute Resolution:</b>Any disputes can be resolved by
                      reaching out to a TRADES TREK LIMITED admin or by emailing &nbsp;&nbsp;
                      <a
                        href="mailto: support@tradestrek.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                         support@tradestrek.com
                      </a>
                    </li>
                  </ul>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      )
}

export default CompetitionsRules
