import Users from "../pages/Users.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Settings from "../pages/Settings.jsx";
import MainContainer from "../container/mainContainer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import AppointmentForm from "../pages/Form.jsx"

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<AppointmentForm />} /> */}
      <Route element={<MainContainer />}>
      <Route path="/" element={<AppointmentForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route
            path="*"
            element={
              <Typography variant="h4" component="h4" sx={{ mt: 12 }}>
                Route not Found
              </Typography>
            }
          />
        </Route>
      </Routes>

    </Router>
  );
};

export default AllRoutes;
