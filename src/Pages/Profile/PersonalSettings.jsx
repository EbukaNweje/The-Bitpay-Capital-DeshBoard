import { useState } from "react";
import "./Profile.css";
import axios from "axios";

const PersonalSettings = ({data}) => {

    const [fullName, setFullName] = useState()
    const [userName, setUserName] = useState()
    // const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isButtonDisabled, setButtonDisabled] = useState(false);
     const [msg, setMsg] = useState()

  const userinfo = {fullName, userName, phoneNumber}

    const updateuserurl = `https://the-bitpay-capital-back-end.vercel.app/api/userdata/${data._id}`
    const upDateUser = () => {
        setButtonDisabled(true)
        axios.patch(updateuserurl, userinfo)
        .then(res=>{setMsg(res.data.message), setButtonDisabled(false)})
        .catch((error)=>{
          setButtonDisabled(false)
          console.log(error)
        })
      }

      const handleFullNameChange = (e) => {
        const newFullName = e.target.value;
        setFullName(newFullName);
      };
      
      const handlephoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
      }; 
    
      const handleuserNameChange = (e) => {
        const newUserName = e.target.value;
        setUserName(newUserName);
      };
    


    console.log("workin on it ", data._id)
    
    return (
        <>
            <div className="ProfileContentPS">
                <div className="ProfileContentPSRow1">
                    <div className="ProfileContentPSRow1A">
                        <p>Full Name</p>
                        <input type="text" placeholder={data.fullName} onChange={handleFullNameChange} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <input type="email" placeholder={data.email} readOnly/>
                    </div>
                </div>
                <div className="ProfileContentPSRow2">
                    <div className="ProfileContentPSRow1A">
                        <p>Address</p>
                        <input type="text" placeholder={data.address} onChange={handleuserNameChange} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Phone Number</p>
                        <input type="text" placeholder={data.phoneNumber} onChange={handlephoneNumberChange} />
                    </div>
                </div>
                <div className="ProfileContentPSRow2">
                    <div className="ProfileContentPSRow1A">
                        <p>Country</p>
                        <input type="text" placeholder={data.country} onChange={handleuserNameChange} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Gender</p>
                        <input type="text" placeholder={data.gender} onChange={handlephoneNumberChange} />
                    </div>
                </div>
               <p style={{marginTop: "1%", marginLeft: "2%", color: "green", fontSize: "18px", fontFamily:"Nunito, sans-serif;"}}>{msg}</p>
                {/* <div className="ProfileContentPSRow3">
                    <div className="ProfileContentPSRow1A">
                        <p>Country</p>
                        <input type="text" readOnly/>
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <textarea placeholder="Full Address" />
                    </div>
                </div> */}
                <div className="ProfileContentPSRow4Btn">
                    <button onClick={upDateUser}
                     disabled={isButtonDisabled}
                     style={{background: `${isButtonDisabled ? "#E0E0E5" : "#0E4152"}`}}
                    >Update Profile</button>
                </div>
            </div>
        </>
    );
};

export default PersonalSettings;
