/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";


const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg";

  function EmailVerification() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { uuid } = useParams(); // Moved useParams outside the function
  
    const handleEmailVerification = async (e) => {
      e.preventDefault();
      console.log("Email verification started");
      try {
        console.log("Getting CSRF token");
        await axios.get("http://localhost:8000/sanctum/csrf-cookie");
        console.log("CSRF token obtained");
  
        console.log("Sending verification code", { uuid, code });
        const response = await axios.post(`http://localhost:8000/api/verifyEmail/${uuid}`, {
          code
        });
        console.log("Response from server:", response.data);
      } catch (error) {
        console.log("Error occurred:", error.response.data.message || error.response.data);
        setError(error.response.data.message || error.response.data);
      }
    };
  



  return (
    <BasicLayout image={bgImage}>
      <Card>
        <ArgonBox p={3} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium" sx={{ my: 2 }}>
            Email Verification
          </ArgonTypography>
       
        </ArgonBox>
        <ArgonBox px={6} pb={3} textAlign="center">
          <ArgonTypography
            display="block"
            variant="button"
            color="secondary"
            fontWeight="regular"
            sx={{ mb: 3 }}
          >
            Enter the verification code we sent to your email in order to continue
          </ArgonTypography>
          <ArgonBox component="form" role="form" onSubmit={handleEmailVerification}>
            <ArgonBox mb={2}>
              <ArgonInput
                type="text"
                placeholder="Verification Code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </ArgonBox>
          
            {error && (
              <ArgonBox mt={2}>
                <ArgonTypography color="error">{error}</ArgonTypography>
              </ArgonBox>
            )}
            <ArgonBox mt={4} mb={1}>
              <ArgonButton color="info" fullWidth type="submit">
                Verify Email 
              </ArgonButton>
            </ArgonBox>
          
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default EmailVerification;
