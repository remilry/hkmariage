import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "./fonts/GreatVibes.ttf";
import { Home } from "./modules/Home";
import { HostingPage } from "./modules/hosting/HostingPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<div />} />
        <Route path="logements" element={<HostingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
