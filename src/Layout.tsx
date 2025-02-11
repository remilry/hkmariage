import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Analytics } from "@vercel/analytics/react";

export const Layout = () => {
  return (
    <>
      <Analytics />
      <Header />
      <Outlet />
    </>
  );
};
