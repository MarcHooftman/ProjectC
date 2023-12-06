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
import AddActivity from "./pages/Activities/AddActivity/AddActivity";
import ProfileByID from "./pages/Profile/ProfileByID/ProfileByID";
import Auth from "./pages/Auth";
import TemporaryLogin from "./pages/Login/TemporaryLogin/TemporaryLogin";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";

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
          <Route path="/activities/add" element={<AddActivity />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/temp" element={<TemporaryLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/training" element={<Training />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
