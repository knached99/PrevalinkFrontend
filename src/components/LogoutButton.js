import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArgonButton from "./ArgonButton";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      localStorage.removeItem("token");
      // Perform any additional cleanup (e.g., clear user state)
      navigate("/authentication/sign-in/basic"); // Redirect to login page or another route after logout
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    // <ArgonButton onClick={handleLogout} variant="" sx={{color: 'inherit'}}>
    //   Logout
    // </ArgonButton>

      <ArgonButton            
            rel="noreferrer"
            variant="outlined"
            fullWidth
            onClick={handleLogout}
          >
            Log Out
          </ArgonButton> 
  );
};

export default LogoutButton;
