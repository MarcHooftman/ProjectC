import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Forum from "./pages/Forum/Forum";
import Activities from "./pages/Activities/Activities";
import Profile from "./pages/Profile/Profile";
import ProfileEdit from "./pages/Profile/Edit_Profile/edit_profile";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit_profile" element={<ProfileEdit />} />
                    <Route path="/activities" element={<Activities />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
