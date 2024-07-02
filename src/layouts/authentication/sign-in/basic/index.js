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
import { useNavigate } from "react-router-dom";
import { useAuth } from 'context/AuthContext';

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
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import github from "assets/images/logos/github.svg";
import google from "assets/images/logos/google.svg";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg";

function Basic() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/api/authenticate", {
  //       email,
  //       password,
  //     });

  //     const token = response.data.access_token;
      
  //     // Fetch user data
  //     const userResponse = await axios.get("http://localhost:8000/api/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     // Update context and localStorage
  //     login(userResponse.data, token);

  //     navigate("/dashboards/smart-home"); 
  //   } catch (error) {
  //     console.log(error);
  //     setError("Login failed. Please check your credentials and try again.");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First, get the CSRF token
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  
      // Then, authenticate the user
      const response = await axios.post("http://localhost:8000/api/authenticate", {
        email,
        password,
      });
  
      const token = response.data.access_token;
  
      localStorage.setItem("token", token);
  
      // Fetch user data and update context
      const userResponse = await axios.get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true,
      });
  
  
      setUser(userResponse.data);
  
      navigate("/dashboards/smart-home");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };
  


  return (
    <BasicLayout image={bgImage}>
      <Card>
        <ArgonBox p={3} textAlign="center">
          <ArgonTypography variant="h5" fontWeight="medium" sx={{ my: 2 }}>
            Sign in
          </ArgonTypography>
          <ArgonBox display="flex" justifyContent="center">
            <ArgonButton size="small" sx={{ mr: 1 }}>
              <ArgonBox component="img" src={github} alt="github" width="23px" height="23px" />
              &nbsp; Github
            </ArgonButton>
            <ArgonButton size="small">
              <ArgonBox component="img" src={google} alt="github" width="23px" height="23px" />
              &nbsp; Google
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox px={6} pb={3} textAlign="center">
          <ArgonTypography
            display="block"
            variant="button"
            color="secondary"
            fontWeight="regular"
            sx={{ mb: 3 }}
          >
            Or sign in with credentials
          </ArgonTypography>
          <ArgonBox component="form" role="form" onSubmit={handleLogin}>
            <ArgonBox mb={2}>
              <ArgonInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </ArgonBox>
            <ArgonBox mb={2}>
              <ArgonInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </ArgonTypography>
            </ArgonBox>
            {error && (
              <ArgonBox mt={2}>
                <ArgonTypography color="error">{error}</ArgonTypography>
              </ArgonBox>
            )}
            <ArgonBox mt={4} mb={1}>
              <ArgonButton color="info" fullWidth type="submit">
                Sign In
              </ArgonButton>
            </ArgonBox>
            <Separator />
            <ArgonBox mt={1} mb={3}>
              <ArgonButton
                component={Link}
                to="/authentication/sign-up/basic"
                variant="gradient"
                color="dark"
                fullWidth
              >
                Sign Up
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
