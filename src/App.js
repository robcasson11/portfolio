import "./app.css";
import { Routes, Route } from "react-router-dom";
import sites from "./data/sites_data";
import Layout from "./components/layout";
import About from "./components/about";
import NoPage from "./components/noPage";
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
                  id={site.id}
                  title={site.title}
                  description={site.description}
                  link={site.link}
                  image={site.image}
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
