import React from "react";
import { Router, ReactLocation, Outlet } from "react-location";
import { paths } from "./paths";
import { Layout } from "./components/Layout";

const reactLocation = new ReactLocation();

export const App: React.VFC = () => {
  return (
    <Router location={reactLocation} routes={[]}>
      <Layout>
        <Router
          location={reactLocation}
          routes={[
            {
              id: "Home",
              path: paths.home,
              element: () => import("./pages/Home").then((mod) => <mod.Home />),
            },
            {
              id: "Settings",
              path: paths.settings,
              element: () =>
                import("./pages/Settings").then((mod) => <mod.Settings />),
            },
          ]}
        />
      </Layout>
    </Router>
  );
};
