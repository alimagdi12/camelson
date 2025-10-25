import React, { useState } from "react";
import "./RequestData.scss";
import PhoneInput from "react-phone-input-2";
import {
  TextField,
  Checkbox,
  Button,
  Box,
  Typography,
  InputAdornment,
  // Grid2 as Grid,
} from "@mui/material";
import {
  LocationOn,
  CreditCard,
  AccountBalanceWallet,
  Receipt,
  MyLocation,
} from "@mui/icons-material";
import LocationPicker from "./components/LocationPicker";

const RequestData = () => {
  const [phone, setPhone] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    building: "",
    houseNumber: "",
    distinctiveMark: "",
    selectedLocation: null,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [savedCards, setSavedCards] = useState({
    visa1: false,
    visa2: false,
  });
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);

  const paymentMethods = [
    {
      id: "visa",
      label: "Visa",
      icon: <CreditCard sx={{ color: "#1a1f71" }} />,
    },
    {
      id: "electronic-wallet",
      label: "Electronic wallet",
      icon: <AccountBalanceWallet sx={{ color: "#f7a600" }} />,
    },
    {
      id: "payment-upon-receipt",
      label: "Payment upon receipt",
      icon: <Receipt sx={{ color: "#f7a600" }} />,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleSavedCardChange = (card: string) => {
    setSavedCards((prev) => ({
      ...prev,
      [card]: !prev[card as keyof typeof prev],
    }));
  };

  const handleLocationSelect = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      distinctiveMark: location,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { formData, paymentMethod, savedCards });
  };

  return (
    <div className="request-container">
      <div className="request-form">
        <Typography variant="h4" className="form-title">
          Request data
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <Box className="form-section">
            <Typography variant="h6" className="section-title">
              Personal Information
            </Typography>

            <Box className="form-row">
              <Box className="form-field">
                <TextField
                  fullWidth
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="form-input"
                />
              </Box>

              <Box className="form-field">
                <PhoneInput
                  country={"eg"}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputStyle={{
                    width: "100%",
                    height: "56px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                  }}
                  inputClass="phone-input"
                />
              </Box>
            </Box>
          </Box>

          {/* Address Information Section */}
          <Box className="form-section">
            <Typography variant="h6" className="section-title">
              Address Information
            </Typography>

            <Box className="form-row">
              <Box className="form-field">
                <TextField
                  fullWidth
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="form-input"
                />
              </Box>

              <Box className="form-field">
                <TextField
                  fullWidth
                  placeholder="The building"
                  value={formData.building}
                  onChange={(e) =>
                    handleInputChange("building", e.target.value)
                  }
                  className="form-input"
                />
              </Box>
            </Box>

            <Box className="form-row">
              <Box className="form-field">
                <TextField
                  fullWidth
                  placeholder="House number"
                  value={formData.houseNumber}
                  onChange={(e) =>
                    handleInputChange("houseNumber", e.target.value)
                  }
                  className="form-input"
                />
              </Box>

              <Box className="form-field">
                <Box className="location-input-container">
                  <TextField
                    fullWidth
                    placeholder="Distinctive mark or additional information"
                    value={formData.distinctiveMark}
                    onChange={(e) =>
                      handleInputChange("distinctiveMark", e.target.value)
                    }
                    className="form-input"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOn sx={{ color: "#666" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    className="select-location-btn"
                    startIcon={<MyLocation />}
                    onClick={() => setLocationPickerOpen(true)}
                  >
                    Select
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Saved Payment Options */}
          <Box className="form-section">
            <Typography variant="h6" className="section-title">
              Saved Payment Options
            </Typography>

            <Box className="form-row">
              {[1, 2].map((index) => (
                <Box className="form-field" key={index}>
                  <Box className="saved-card-option">
                    <CreditCard sx={{ color: "#1a1f71", fontSize: 32 }} />
                    <Typography variant="body1">Visa</Typography>
                    <Checkbox
                      checked={
                        savedCards[`visa${index}` as keyof typeof savedCards]
                      }
                      onChange={() => handleSavedCardChange(`visa${index}`)}
                      sx={{ color: "#f7a600" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Choose Payment Method */}
          <Box className="form-section">
            <Typography
              variant="h6"
              className="section-title payment-method-title"
            >
              Choose payment method
            </Typography>

            <Box className="form-row payment-methods-row">
              {paymentMethods.map((method) => (
                <Box
                  className="form-field payment-method-field"
                  key={method.id}
                >
                  <Box
                    className={`payment-method-option ${
                      paymentMethod === method.id ? "selected" : ""
                    }`}
                    onClick={() => handlePaymentMethodChange(method.id)}
                  >
                    {method.icon}
                    <Typography variant="body1">{method.label}</Typography>
                    <Checkbox
                      checked={paymentMethod === method.id}
                      onChange={() => handlePaymentMethodChange(method.id)}
                      sx={{ color: "#f7a600" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Confirm Button */}
          <Button
            type="submit"
            variant="contained"
            className="confirm-button"
            fullWidth
          >
            Confirm
          </Button>
        </form>
      </div>

      <LocationPicker
        open={locationPickerOpen}
        onClose={() => setLocationPickerOpen(false)}
        onSelect={handleLocationSelect}
      />
    </div>
  );
};

export default RequestData;
