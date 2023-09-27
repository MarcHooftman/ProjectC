import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import { Button } from "reactstrap";
import { useState } from "react";

const Forum = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    return (
        <Layout dark={darkMode}>
            <h1>Forum</h1>
            <Button onClick={() => setDarkMode(!darkMode)}>Switch theme</Button>
        </Layout>
    );
};

export default Forum;
