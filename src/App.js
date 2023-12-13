import "./app.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import About from "./components/about";
import NoPage from "./components/noPage";
import sites from "./data/sites_data";
import Card from "./components/card";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        {sites.map((site) => {
          return (
            <Route
              path={site.path}
              key={site.id}
              element={
                <Card
                  title={site.title}
                  description={site.description}
                  link={site.link}
                />
              }
            />
          );
        })}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
