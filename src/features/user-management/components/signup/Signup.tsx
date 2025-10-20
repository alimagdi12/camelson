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
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // Later: Add validation & API logic here
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="signup-box p-5">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
          Sign up
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                InputProps={{
                  style: {
                    borderColor: "green",
                  },
                }}
              />
            </div>
            <div className="col-md-6 mb-3">
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
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
                  border: "1px solid #ccc",
                }}
                inputClass="phone-input"
              />
            </div>
            <div className="col-md-6 mb-3">
              <TextField
                label="Email"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={!formData.email.includes("@") && formData.email !== ""}
                helperText={
                  !formData.email.includes("@") && formData.email !== ""
                    ? "Invalid email"
                    : ""
                }
              />
            </div>
          </div>

          {/* Passwords */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={formData.password}
                onChange={handleChange}
                error={formData.password.length > 0 && formData.password.length < 6}
                helperText={
                  formData.password.length > 0 && formData.password.length < 6
                    ? "Minimum 6 characters"
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
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                error={
                  formData.confirmPassword.length > 0 &&
                  formData.confirmPassword !== formData.password
                }
                helperText={
                  formData.confirmPassword.length > 0 &&
                  formData.confirmPassword !== formData.password
                    ? "Passwords do not match"
                    : ""
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                label="The University"
                name="university"
                fullWidth
                value={formData.university}
                onChange={handleChange}
              >
                <MenuItem value="Cairo University">Cairo University</MenuItem>
                <MenuItem value="Ain Shams">Ain Shams</MenuItem>
              </TextField>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                select
                label="College"
                name="college"
                fullWidth
                value={formData.college}
                onChange={handleChange}
              >
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </TextField>
            </div>

            <div className="col-md-4 mb-3">
              <TextField
                select
                label="Academic Year"
                name="academicYear"
                fullWidth
                value={formData.academicYear}
                onChange={handleChange}
              >
                <MenuItem value="1st Year">1st Year</MenuItem>
                <MenuItem value="2nd Year">2nd Year</MenuItem>
                <MenuItem value="3rd Year">3rd Year</MenuItem>
                <MenuItem value="4th Year">4th Year</MenuItem>
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
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
