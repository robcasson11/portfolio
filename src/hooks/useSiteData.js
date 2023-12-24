import { useContext } from "react";
import SiteDataContext from "../context/siteDataProvider";

const useSiteData = () => {
  return useContext(SiteDataContext);
};

export default useSiteData;
