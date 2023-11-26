import "./Profile.css";

const PersonalSettings = () => {
    return (
        <>
            <div className="ProfileContentPS">
                <div className="ProfileContentPSRow1">
                    <div className="ProfileContentPSRow1A">
                        <p>Full Name</p>
                        <input type="text" value={"Eflex Media"} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <input type="email" value={"nwejeebuka@gmail.com"} readOnly/>
                    </div>
                </div>
                <div className="ProfileContentPSRow2">
                    <div className="ProfileContentPSRow1A">
                        <p>Phone Number</p>
                        <input type="text" value={"+2347087907340"} />
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Date od Birth</p>
                        <input type="date" value={"nwejeebuka@gmail.com"} />
                    </div>
                </div>
                <div className="ProfileContentPSRow3">
                    <div className="ProfileContentPSRow1A">
                        <p>Country</p>
                        <input type="text" readOnly/>
                    </div>
                    <div className="ProfileContentPSRow1B">
                        <p>Email</p>
                        <textarea placeholder="Full Address" />
                    </div>
                </div>
                <div className="ProfileContentPSRow4Btn">
                    <button>Update Profile</button>
                </div>
            </div>
        </>
    );
};

export default PersonalSettings;
