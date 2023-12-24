import { createContext } from "react";
import sites from "../data/sites_data";

const SiteDataContext = createContext();

export const SiteDataProvider = ({ children }) => {
  const siteData = sites;
  return (
    <SiteDataContext.Provider value={[siteData]}>
      {children}
    </SiteDataContext.Provider>
  );
};

export default SiteDataContext;
