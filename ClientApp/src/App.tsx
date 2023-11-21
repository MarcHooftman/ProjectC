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
import Registration from "./pages/Registration/Registration";
import ProfileByID from "./pages/Profile/ProfileByID/ProfileByID";
import Logout from "./pages/Logout";

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
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/training" element={<Training />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
