import React from "react";
import { Router as ReactLocationRouter, ReactLocation } from "react-location";
import { Layout } from "./components/Layout";
import { Router } from "./Router";

const reactLocation = new ReactLocation();

export const App: React.VFC = () => {
  return (
    // Outer router for context load
    <ReactLocationRouter location={reactLocation} routes={[]}>
      <Layout>
        <Router reactLocation={reactLocation} />
      </Layout>
    </ReactLocationRouter>
  );
};
