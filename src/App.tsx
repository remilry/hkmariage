import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./fonts/GreatVibes.ttf";
import { Home } from "./modules/home/Home";
import { HostingPage } from "./modules/hosting/HostingPage";
import { Layout } from "./Layout";
import { PhotosPage } from "./modules/photos/PhotosPage";
import { InfosPage } from "./modules/infos/InfosPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="infos" element={<InfosPage />} />
        <Route path="logements" element={<HostingPage />} />
        <Route path="photos" element={<PhotosPage />} />
      </Route>
    </Routes>
  );
}

export default App;
