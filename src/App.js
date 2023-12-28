import "./app.css";
import { Routes, Route } from "react-router-dom";
import useSiteData from "./hooks/useSiteData";
import Layout from "./components/layout";
import About from "./components/about";
import NoPage from "./components/noPage";
import Card from "./components/card";
import SitePage from "./components/SitePage";

function App() {
  const [siteData] = useSiteData();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        {siteData.map((site) => {
          return (
            <Route key={site.id}>
              <Route
                path={site.path}
                key={site.id}
                element={<Card site={site} />}
              />
              <Route key={site.id} path=":id" element={<SitePage />} />
            </Route>
          );
        })}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
