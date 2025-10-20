import "./compdata.scss";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import gradImage from "../../assets/images/completeData/gradimage.png";
import PharoahLine from "../../shared/components/pharoah-line/Pharoah-line";
import { useTranslation } from "react-i18next";

const Compdata = () => {
  const [phone, setPhone] = useState<string>("");
  const { t } = useTranslation();

  return (
    <>
      <div className="section-container">
        <div className="input-box">
          <h1>{t("compdata.title")}</h1>
          <div className="form-grid">
            <select defaultValue="" className="select-input">
              <option value="" disabled>
                {t("compdata.university")}
              </option>
            </select>
            <select defaultValue="" className="select-input">
              <option value="" disabled>
                {t("compdata.college")}
              </option>
            </select>
            <div>
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
            <select defaultValue="" className="select-input">
              <option value="" disabled>
                {t("compdata.year")}
              </option>
            </select>
          </div>

          <button className="confirm-btn">{t("compdata.confirm")}</button>
        </div>
        <div className="img-box">
          <img src={gradImage} alt="" />
        </div>
      </div>
      <PharoahLine />
    </>
  );
};

export default Compdata;
