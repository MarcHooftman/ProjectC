import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Forum from "./pages/Forum/Forum";
import Activities from "./pages/Activities/Activities";
import Profile from "./pages/Profile/Profile";
import Training from "./pages/Training/Training";
import ProfileEdit from "./pages/Profile/Edit_Profile/edit_profile";
import Login from "./pages/Login/Login";
import Post from "./pages/Forum/Post/Post";
import ProfileByID from "./pages/Profile/ProfileByID/ProfileByID";
import Auth from "./pages/Auth";
import TemporaryLogin from "./pages/Login/TemporaryLogin/TemporaryLogin";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import AdminForum from "./admin/pages/AdminForum/AdminForum";
import AdminActivities from "./admin/pages/AdminActivities/AdminActivities";
import AdminTrainings from "./admin/pages/AdminTrainings/AdminTrainings";
import AdminReports from "./admin/pages/AdminReports/AdminReports";
import AdminUsers from "./admin/pages/AdminUsers/AdminUsers";
import AdminAddActivity from "./admin/pages/AdminActivities/AdminAddActivity/AdminAddActivity";
import AdminEditActivity from "./admin/pages/AdminActivities/AdminEditActivity/AdminEditActivity";
import AdminAddAdmin from "./admin/pages/AdminUsers/Add/AdminAddAdmin";
import AdminAddTempUser from "./admin/pages/AdminUsers/Add/AdminAddTempUser";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<ProfileByID />} />
          <Route path="/edit_profile" element={<ProfileEdit />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/temp" element={<TemporaryLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/training" element={<Training />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/forum" element={<AdminForum />} />
          <Route path="/admin/activities" element={<AdminActivities />} />
          <Route path="/admin/activities/add" element={<AdminAddActivity />} />
          <Route path="/admin/activities/edit/:id" element={<AdminEditActivity />} />
          <Route path="/admin/trainings" element={<AdminTrainings />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/create/temp" element={<AdminAddTempUser />} />
          <Route path="/admin/users/create/admin" element={<AdminAddAdmin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
