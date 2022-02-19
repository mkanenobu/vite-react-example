import React from "react";
import {
  Router as ReactLocationRouter,
  type ReactLocation,
} from "react-location";
import { paths } from "./paths";

export const Router: React.VFC<{ reactLocation: ReactLocation }> = (props) => (
  <ReactLocationRouter
    location={props.reactLocation}
    routes={[
      {
        id: "Home",
        path: paths.home,
        element: () => import("./pages/Home").then((mod) => <mod.Home />),
      },
      {
        id: "Three.js",
        path: paths.three,
        element: () => import("./pages/Three").then((mod) => <mod.Three />),
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
        element: () => import("./pages/Chart").then((mod) => <mod.Chart />),
      },
      {
        id: "Data",
        path: paths.data,
        element: () => import("./pages/Data").then((mod) => <mod.Data />),
      },
      {
        id: "Animation",
        path: paths.animation,
        element: () =>
          import("./pages/Animation").then((mod) => <mod.Animation />),
      },
    ]}
  />
);
