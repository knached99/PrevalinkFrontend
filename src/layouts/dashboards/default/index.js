// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import PrevalinkCardMini from "examples/Cards/StatisticsCards/PrevalinkCardMini";

import SalesTable from "examples/Tables/SalesTable";
import Table from "examples/Tables/Table";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Argon Dashboard 2 PRO MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboards/default/components/Slider";
import TeamMembers from "layouts/dashboards/default/components/TeamMembers";
import TodoList from "layouts/dashboards/default/components/TodoList";
import ProgressTrack from "layouts/dashboards/default/components/ProgressTrack";
import BalanceCard from "layouts/dashboards/default/components/BalanceCard";
import CryptoCard from "layouts/dashboards/default/components/CryptoCard";

// Pages layout components
import Post from "layouts/pages/profile/teams/components/Post";

// Data
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";
import projectsTableData from "layouts/dashboards/default/data/projectsTableData";
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import authorsTableData from "layouts/dashboards/default/data/authorsTableData";
import categoriesListData from "layouts/dashboards/default/data/categoriesListData";

function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <PrevalinkCardMini
              title="Visits"
              count="231"
              icon={{ color: "primary", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", count: "+7%", text: "from last weeek" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <PrevalinkCardMini
              title="Visitors"
              count="189"
              icon={{ color: "primary", component: <i className="ni ni-single-02" /> }}
              percentage={{ color: "success", count: "+724", text: "from last month" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <PrevalinkCardMini
              title="Click-Throughs"
              count="73"
              icon={{ color: "primary", component: <i className="ni ni-active-40" /> }}
              percentage={{ color: "error", count: "-2%", text: "from last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <PrevalinkCardMini
              title="New Followers"
              count="12"
              icon={{ color: "error", component: <i className="ni ni-fat-add" /> }}
              percentage={{ color: "success", count: "+53", text: "from last week" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={12} mb={4}>
          <Grid item xs={12} sm={12}>
            <PlaceholderCard title={{ variant: "h6", text: 'Create New Page' }} hasBorder />
          </Grid>
        </Grid>
        {/* <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Weekly Views"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography variant="button" color="text" fontWeight="medium">
                    12% more{" "}
                    <ArgonTypography variant="button" color="text" fontWeight="regular">
                      in 2023
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid> */}

        {/* <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={4}>
            <TeamMembers />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TodoList />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProgressTrack />
          </Grid>
        </Grid> */}

        {/* <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={5}>
            <Post />
          </Grid>
          <Grid container item xs={12} lg={7} spacing={3}>
            <Grid item xs={12} height="max-content">
              <ArgonBox
                sx={{
                  "& .MuiTableContainer-root": {
                    p: 3,
                  },
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={projectsTableData.columns} rows={projectsTableData.rows} />
              </ArgonBox>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12} md={6}>
                <BalanceCard />
              </Grid>
              <Grid item xs={12} md={6}>
                <CryptoCard />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <SalesTable title="Sales by Country" rows={salesTableData} />
            </Grid>
          </Grid>
        </Grid> */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={authorsTableData.columns} rows={authorsTableData.rows} />
            </ArgonBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="categories" categories={categoriesListData} />
          </Grid>
        </Grid> */}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
