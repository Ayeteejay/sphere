import * as React from "react";
import "../styles/styles.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";

const Index = () => {
  return (
    <Layout>
      <div className="content">
        <Hero></Hero>
      </div>
    </Layout>
  );
};
export default Index;
