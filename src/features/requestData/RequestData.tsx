import React, { useState } from "react";
import "./RequestData.scss";
import PhoneInput from "react-phone-input-2";
const RequestData = () => {
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="request-container">
      <div className="request-form">
        <h1>Request Data</h1>
        <div className="user-data">
          <div className="phone-location">
            <input type="text" placeholder="Name" />
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputStyle={{
                width: "100%",
                height: "48px",
                borderRadius: "8px",
                border: "1px solid #000",
              }}
              inputClass="phone-input"
            />
          </div>
          <input type="text" placeholder="Location" />
        </div>

        <div className="payment method">
          <h1>Choose payment method</h1>
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
        <div className="card-data">
          <input />
          <input />
          <input />
          <input />
        </div>
        <button className="confirm">Confirm</button>
      </div>
    </div>
  );
};

export default RequestData;
