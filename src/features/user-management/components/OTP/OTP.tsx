import { useEffect, useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import PharoahLine from "../../../../shared/components/pharoah-line/Pharoah-line";
import messageGif from "../../../../assets/gif/message.gif";
import "./otp.scss";

const RESEND_SECONDS = 60;

const Otp = () => {
  const [otp, setOtp] = useState<string>("");
  const [secondsLeft, setSecondsLeft] = useState<number>(RESEND_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const isResendDisabled = secondsLeft > 0;
  const formattedTime = useMemo(() => {
    const mins = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, "0");
    const secs = (secondsLeft % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  }, [secondsLeft]);

  const handleOtpChange = (newValue: string) => {
    setOtp(newValue.replace(/\D/g, ""));
  };

  const handleResend = () => {
    if (isResendDisabled) return;
    setOtp("");
    setSecondsLeft(RESEND_SECONDS);
  };

  const isComplete = otp.length === 6;

  return (
    <div className="otp-container">
      <PharoahLine />
      <div className="otp-content">
        <Box className="otp-card" sx={{ bgcolor: "#fff" }}>
          <Box className="otp-left">
            <img src={messageGif} alt="OTP" />
          </Box>
          <Box className="otp-right">
            <Typography
              variant="h4"
              fontWeight={800}
              textAlign="center"
              gutterBottom
            >
              OTP
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              mb={3}
              textAlign="center"
            >
              A code has been sent to the number +201200000035
            </Typography>

            <Box display="flex" justifyContent="center" mb={3}>
              <MuiOtpInput
                value={otp}
                onChange={handleOtpChange}
                length={6}
                sx={{ gap: 3 }}
                TextFieldsProps={{
                  inputProps: { inputMode: "numeric", maxLength: 1 },
                  sx: {
                    width: 56,
                    "& .MuiInputBase-root": {
                      height: 56,
                      borderRadius: 2,
                    },
                    "& input": {
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: 600,
                    },
                  },
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
              mb={1.5}
            >
              <Typography variant="body1">
                If you do not receive the message!
              </Typography>
              <Button
                variant="text"
                disabled={isResendDisabled}
                onClick={handleResend}
                sx={{
                  textTransform: "none",
                  p: 0,
                  minWidth: 0,
                  color: "#f4b11a",
                  "&.Mui-disabled": { color: "text.disabled" },
                }}
              >
                send it again
              </Button>
              <Typography variant="body2" color="text.secondary" ml={1}>
                {formattedTime}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              textAlign="center"
              mb={3}
            >
              If you encounter any problem please contact technical support.
            </Typography>

            <Box textAlign="center">
              <Button
                variant="contained"
                disabled={!isComplete}
                sx={{
                  bgcolor: "#f4b11a",
                  "&:hover": { bgcolor: "#e0a312" },
                  width: 300,
                  height: 56,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
      <PharoahLine />
    </div>
  );
};

export default Otp;
