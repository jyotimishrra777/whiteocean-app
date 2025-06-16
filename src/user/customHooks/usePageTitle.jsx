import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const routeTitles = {
  "/": " Whiteocean-App | Home ",
  "/about": " Whiteocean-App | About Us ",
  "/properties": "Whiteocean-App | Properties ",
  "/career": "Whiteocean-App | Career ",
  "/contact": "Whiteocean-App | Contact Us ",
};

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = "Whiteocean-App";
    const title = routeTitles[location.pathname] || defaultTitle;
    document.title = title;
  }, [location.pathname]);
};

export default usePageTitle;
