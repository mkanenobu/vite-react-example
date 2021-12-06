import React from "react";
import { Router, ReactLocation, Outlet } from "react-location";
import { paths } from "./paths";
import { Layout } from "./components/Layout";

const reactLocation = new ReactLocation();

export const App: React.VFC = () => {
  return (
    // Outer router for context load
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
              id: "Three.js",
              path: paths.three,
              element: () =>
                import("./pages/Three").then((mod) => <mod.Three />),
            },
            {
              id: "Settings",
              path: paths.settings,
              element: () =>
                import("./pages/Settings").then((mod) => <mod.Settings />),
            },
            {
              id: "Chart",
              path: paths.chart,
              element: () =>
                import("./pages/Chart").then((mod) => <mod.Chart />),
            },
          ]}
        />
      </Layout>
    </Router>
  );
};
