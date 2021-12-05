import React from "react";
import { Router, ReactLocation } from "react-location";
import { paths } from "./paths";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

const reactLocation = new ReactLocation();

export const App: React.VFC = () => {
  return (
    <Layout>
      <Router
        location={reactLocation}
        routes={[
          { id: "Home", path: paths.home, element: <Home /> },
          { id: "Settings", path: paths.settings, element: <Settings /> },
        ]}
      />
    </Layout>
  );
};
