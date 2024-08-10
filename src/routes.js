// Argon Dashboard 2 PRO MUI layouts
import Default from "layouts/dashboards/default";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";

import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";
import ProtectedRoute from "components/ProtectedRoute";
// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-building" />,
    collapse: [
      {
        name: "Home",
        key: "default",
        route: "/",
        component: <ProtectedRoute element={Default} />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Discover",
    key: "discover",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-world-2" />,
    collapse: [
      {
        name: "Discover",
        key: "discover",
        route: "/discover",
      },
    ],
  },
  

  { type: "title", title: "My Prevalink", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-ungroup" />,
    collapse: [
      { name: "My Pages", key: "mypages", route: "/pages", },
      { name: "Create New Page", key: "createpage", route: "/pages/create", },
    ],
  },
  {
    type: "collapse",
    name: "Analytics",
    key: "analytics",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-chart-bar-32" />,
    collapse: [
      { name: "Analytics", key: "analytics", route: "/analytics", },
    ],
  },
  { type: "divider", key: "divider-1" },
];

export default routes;
