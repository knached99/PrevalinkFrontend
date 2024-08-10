// react-github-btn
import GitHubButton from "react-github-btn";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import LogoutButton from "components/LogoutButton";


// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import { useAuth } from "context/AuthContext";


// Argon Dashboard 2 PRO MUI context
import {
  useArgonController,
  setOpenConfigurator,
  setDarkSidenav,
  setMiniSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
} from "context";

function Configurator() {   
  const [controller, dispatch] = useArgonController();
  const { openConfigurator, darkSidenav, miniSidenav, fixedNavbar, sidenavColor, darkMode } =
    controller;
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];
  const { user } = useAuth();

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handledarkSidenav = () => setDarkSidenav(dispatch, true);
  const handleWhiteSidenav = () => setDarkSidenav(dispatch, false);
  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);
  const handleDarkMode = () => {
    setDarkSidenav(dispatch, !darkMode);
    setDarkMode(dispatch, !darkMode);
  };

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <ArgonBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <ArgonBox>
          <ArgonTypography variant="h5">Welcome, {user && user.name}</ArgonTypography>
          <ArgonTypography variant="body2" color="text">
            Current Plan: Starter
          </ArgonTypography>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </ArgonBox>

      <Divider />

      <ArgonBox pt={1.25} pb={3} px={3}>

        <ArgonBox mt={5} mb={2}>
          <ArgonBox mb={2}>
            <ArgonButton
              component={Link}
              href="https://www.creative-tim.com/product/argon-dashboard-pro-mui"
              target="_blank"
              rel="noreferrer"
              color="info"
              fullWidth
            >
              Buy Now
            </ArgonButton>
          </ArgonBox>
          <ArgonBox mb={2}>
            <ArgonButton
              component={Link}
              href="https://www.creative-tim.com/product/argon-dashboard-mui"
              target="_blank"
              rel="noreferrer"
              color="dark"
              fullWidth
            >
              Free Download
            </ArgonButton>
          </ArgonBox>
          {/* <ArgonButton
            component={Link}
            
            rel="noreferrer"
            color={darkMode ? "white" : "dark"}
            variant="outlined"
            fullWidth
          >
            Log Out
          </ArgonButton> */}

          <LogoutButton/>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonBox mb={0.5}>
            <ArgonTypography variant="h6">Follow Prevalink</ArgonTypography>
          </ArgonBox>

          <ArgonBox display="flex" justifyContent="center">
            <ArgonBox mr={1.5}>
              <ArgonButton
                component={Link}
                href="#"
                target="_blank"
                rel="noreferrer"
                color="dark"
              >
                <TwitterIcon />
                &nbsp; Twitter
              </ArgonButton>
            </ArgonBox>
            <ArgonButton
              component={Link}
              href="#"
              target="_blank"
              rel="noreferrer"
              color="dark"
            >
              <FacebookIcon />
              &nbsp; Facebook
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
