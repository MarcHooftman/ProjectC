import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/components/Home";
import About from "./pages/About/components/About";
import Forum from "./pages/Forum/components/Forum";
import Activities from "./pages/Activities/components/Activities";
import Profile from "./pages/Profile/components/Profile";
import Training from "./pages/Training/components/Training";
import ProfileEdit from "./pages/Profile/components/Edit_Profile/edit_profile";
import Login from "./pages/Login/components/Login";
import Post from "./pages/Forum/components/Post/Post";
import ProfileByID from "./pages/Profile/components/ProfileByID/ProfileByID";
import Auth from "./pages/Auth";
import TemporaryLogin from "./pages/Login/components/TemporaryLogin/TemporaryLogin";
import AdminLogin from "./pages/Login/components/AdminLogin/AdminLogin";
import AdminDashboard from "./admin/pages/Dashboard/AdminDashboard";
import AdminForum from "./admin/pages/AdminForum/components/AdminForum";
import AdminActivities from "./admin/pages/AdminActivities/components/AdminActivities";
import AdminTrainings from "./admin/pages/AdminTrainings/components/AdminTrainings";
import AdminAddTrainings from "./admin/pages/AdminTrainings/components/AdminAddTrainings";
import AdminEditTrainings from "./admin/pages/AdminTrainings/components/AdminEditTrainings";
import AdminReports from "./admin/pages/AdminReports/AdminReports";
import AdminUsers from "./admin/pages/AdminUsers/components/AdminUsers";
import AdminAddActivity from "./admin/pages/AdminActivities/components/AdminAddActivity";
import AdminEditActivity from "./admin/pages/AdminActivities/components/AdminEditActivity";
import AdminAddAdmin from "./admin/pages/AdminUsers/components/Add/AdminAddAdmin";
import AdminAddTempUser from "./admin/pages/AdminUsers/components/Add/AdminAddTempUser";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
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
          <Route
            path="/admin/activities/edit/:id"
            element={<AdminEditActivity />}
          />
          <Route path="/admin/trainings" element={<AdminTrainings />} />
          <Route path="/admin/trainings/add" element={<AdminAddTrainings />} />
          <Route
            path="/admin/trainings/edit/:id"
            element={<AdminEditTrainings />}
          />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route
            path="/admin/users/create/temp"
            element={<AdminAddTempUser />}
          />
          <Route path="/admin/users/create/admin" element={<AdminAddAdmin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
