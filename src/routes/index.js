import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const NewMeeting = lazy(() => import("../pages/NewMeeting/NewMeeting"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="add-meeting" element={<NewMeeting />} />
    </Routes>
  );
};

export default AppRoutes;
