import React, { useState, type ChangeEvent, type FormEvent } from "react";
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./Signup.scss";
import { useTranslation } from "react-i18next";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  university: string;
  college: string;
  academicYear: string;
}

function Signup() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    college: "",
    academicYear: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div
      className="signup-container d-flex justify-content-center align-items-center"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="signup-box p-5">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          {t("signup.title")}
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <TextField
                label={t("signup.firstName")}
                name="firstName"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <TextField
                label={t("signup.lastName")}
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <PhoneInput
                country={"eg"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "4px",
                }}
                inputClass="phone-input"
              />
            </div>
            <div className="col-md-6 mb-3">
              <TextField
                label={t("signup.email")}
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
                error={!formData.email.includes("@") && formData.email !== ""}
                helperText={
                  !formData.email.includes("@") && formData.email !== ""
                    ? t("signup.invalidEmail")
                    : ""
                }
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <TextField
                label={t("signup.password")}
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={formData.password}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
                error={
                  formData.password.length > 0 && formData.password.length < 6
                }
                helperText={
                  formData.password.length > 0 && formData.password.length < 6
                    ? t("signup.minPassword")
                    : ""
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <TextField
                label={t("signup.confirmPassword")}
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
                error={
                  formData.confirmPassword.length > 0 &&
                  formData.confirmPassword !== formData.password
                }
                helperText={
                  formData.confirmPassword.length > 0 &&
                  formData.confirmPassword !== formData.password
                    ? t("signup.passwordMismatch")
                    : ""
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="row">
            <div className="col-md-4 mb-3">
              <TextField
                select
                label={t("signup.university")}
                name="university"
                fullWidth
                value={formData.university}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <MenuItem value="Cairo University">
                  {t("signup.universities.cairo")}
                </MenuItem>
                <MenuItem value="Ain Shams">
                  {t("signup.universities.ainShams")}
                </MenuItem>
              </TextField>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                select
                label={t("signup.college")}
                name="college"
                fullWidth
                value={formData.college}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <MenuItem value="Engineering">
                  {t("signup.colleges.engineering")}
                </MenuItem>
                <MenuItem value="Business">
                  {t("signup.colleges.business")}
                </MenuItem>
              </TextField>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                select
                label={t("signup.academicYear")}
                name="academicYear"
                fullWidth
                value={formData.academicYear}
                onChange={handleChange}
                dir={i18n.language === "ar" ? "rtl" : "ltr"}
                inputProps={{ dir: i18n.language === "ar" ? "rtl" : "ltr" }}
              >
                <MenuItem value="1st Year">{t("signup.years.1")}</MenuItem>
                <MenuItem value="2nd Year">{t("signup.years.2")}</MenuItem>
                <MenuItem value="3rd Year">{t("signup.years.3")}</MenuItem>
                <MenuItem value="4th Year">{t("signup.years.4")}</MenuItem>
              </TextField>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="signup-btn mt-3"
          >
            {t("signup.signupBtn")}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
