import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <Button onClick={handleLogout} variant="outlined" sx={{color: 'inherit'}}>
      Logout
    </Button>
  );
};

export default LogoutButton;
