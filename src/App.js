import "./app.css";
import { Routes, Route } from "react-router-dom";
import sites from "./data/sites_data";
import Layout from "./components/layout";
import About from "./components/about";
import NoPage from "./components/noPage";
import Card from "./components/card";
import SitePage from "./components/SitePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        {sites.map((site) => {
          return (
            <Route key={site.id}>
              <Route
                path={site.path}
                key={site.id}
                element={
                  <Card
                    id={site.id}
                    title={site.title}
                    description={site.description}
                    links={site.links}
                    image={site.image}
                  />
                }
              />
              <Route
                key={site.id}
                path=":id"
                element={<SitePage links={site.links} />}
              />
            </Route>
          );
        })}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
