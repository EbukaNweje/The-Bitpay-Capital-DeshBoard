import './Referrals.css'
import {FaCopy, FaUser} from "react-icons/fa";
import {FaArrowDownLong, FaArrowUpLong} from "react-icons/fa6";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Referrals = () => {
    
    const [state, setState] = useState({
        value: "https://www.bitpaynexus.com/",
        copied: false,
      });

    return (
        <>
            <div className="ReferralBody">
                <h1>Refer users to  Bitpay Capital community</h1>
                <div className="ReferralContent">
                    <div className="ReferralContentTop">
                        <div className="ReferralContentTopInputndLabel">
                            <p>
                                You can refer users by sharing your referral
                                link:
                            </p>
                            <div className="ReferralContentTopReferUsDivBox">
                                <input
                                    type="text"
                                    value={state.value}
                                    readOnly
                                />
                                <CopyToClipboard
                                 text={state.value}
                                 onCopy={() => setState({ copied: true })}
                                 >
                                <div className="ReferralContentTopReferUsDivBoxCopy">
                                    <FaCopy />
                                </div>
                                 </CopyToClipboard>
                            </div>
                        </div>
                        <div className='ReferralContentTopInfoBox'>
                          <p>or your Referral ID</p>
                          {/* <h5>eze</h5> */}
                          <h4>You were reffered by</h4>
                          <h6><FaUser className='FaUser'/><span>null</span></h6>
                        </div>
                    </div>
                    <div className="ReferralContentDown">
                        <p className="MyYour">Your Referrals.</p>
                        <div className="ReferralContentResultA">
                            <div className="ReferralContentResultALeft">
                                <p>
                                    Show{" "}
                                    <select>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>{" "}
                                    entries
                                </p>
                            </div>
                            <div className="ReferralContentResultARight">
                                <p>Search</p>
                                <input type="search" />
                            </div>
                        </div>
                        <div className="ReferralContentResultB">
                            <div className="ReferralContentResultB1">
                                Client name
                                <span>
                                    <FaArrowUpLong /> <FaArrowDownLong />
                                </span>
                            </div>
                            <div className="ReferralContentResultB2">
                                Ref. level
                                <span>
                                    <FaArrowUpLong /> <FaArrowDownLong />
                                </span>
                            </div>
                            <div className="ReferralContentResultB2">
                                Parent
                                <span>
                                    <FaArrowUpLong /> <FaArrowDownLong />
                                </span>
                            </div>
                            <div className="ReferralContentResultB3">
                                Client Status
                                <span>
                                    <FaArrowUpLong /> <FaArrowDownLong />
                                </span>
                            </div>
                            <div className="ReferralContentResultB4">
                                Date registered
                                <span>
                                    <FaArrowUpLong /> <FaArrowDownLong />
                                </span>
                            </div>
                        </div>
                        <div className="ReferralContentResultC">
                            <div className="ReferralContentResultCItem">
                                <div className="ReferralContentResultC1">
                                    {/* Mark Spence */}
                                </div>
                                <div className="ReferralContentResultC2">
                                    {/* Basic */}
                                </div>
                                <div className="ReferralContentResultC3">
                                    {/* ID20013JOS */}
                                </div>
                                <div className="ReferralContentResultC4">
                                    {/* <span>Active</span> */}
                                </div>
                                <div className="ReferralContentResultC5">
                                    {/* Thu, Nov 23, 2023 4:03 AM */}
                                </div>
                            </div>
                        </div>
                        <div className="ReferralContentResultD">
                            <div className="ReferralContentResultDLeft">
                                Showing 1 &nbsp; <p> to 1 &nbsp;</p> of 1
                                entries
                            </div>
                            <div className="ReferralContentResultDRight">
                                <div className="ReferralContentResultDRightBtn1">
                                    Previous
                                </div>
                                <div className="ReferralContentResultDRightBtn2">
                                    1
                                </div>
                                <div className="ReferralContentResultDRightBtn3">
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Referrals;
