import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Necessary because some pages didn't render correctly when navigating to them from another page
export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}