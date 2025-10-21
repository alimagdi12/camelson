import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { TextField, Button, Typography } from "@mui/material";
import GoogleIcon from "../../../../assets/icon/user-management/login/google-icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import image from "../../../../assets/images/user-management/login/image.png";
import type { FormData } from "../../../../core/models/Login";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Later: add validation & API call
  };

  const handleSignupClick = () => {
    navigate("/user-management/signup");
  };

  return (
    <div className="login-container">
      <div className="form-section d-flex flex-column justify-content-center align-items-end">
        <div className="form-box p-5">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={3}
            fontSize={20}
          >
            {t("login.title")}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label={t("login.email")}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="mb-3"
            />
            <TextField
              label={t("login.password")}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              className="mb-4"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="login-btn mb-3"
            >
              {t("login.loginBtn")}
            </Button>

            <button
              type="button"
              className="google-btn"
              onClick={() => navigate("/complete-data")}
            >
              <img src={GoogleIcon} alt="Google Icon" />
              {t("login.googleBtn")}
            </button>
          </form>

          <Typography
            variant="body2"
            textAlign="center"
            mt={3}
            className="register-text"
          >
            {t("login.noAccount")}{" "}
            <span className="register-link" onClick={handleSignupClick}>
              {t("login.register")}
            </span>
          </Typography>
        </div>
      </div>

      <div className="image-section">
        <img src={image} alt="login" />
      </div>
    </div>
  );
}

export default Login;
