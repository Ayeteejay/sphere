import * as React from "react";
import "../styles/styles.scss";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Helmet from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sphere</title>
      </Helmet>
      <Hero></Hero>
      <div className="content">
        <div className="row">
          <h2>Buttons</h2>
          <div className="button-row">
            <a href="#" className="primary-btn">
              Primary Button
            </a>
            <a href="#" className="alternative-btn">
              Alternative Button
            </a>
            <a href="#" className="secondary-btn">
              Secondary Button
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
