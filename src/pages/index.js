import * as React from "react";
import "../styles/styles.scss";
import favicon from "../images/favicon.ico";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Card from "../components/card";
import LargeCard from "../components/large-card";
import Background from "../images/resource-background.jpg";
import BackgroundTwo from "../images/resource-background-2.jpg";
import Helmet from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sphere</title>
        <meta name="description" content="Component library for Sphere site" />
        <link rel="icon" href={favicon}></link>
      </Helmet>
      <Hero></Hero>
      <div className="content">
        <LargeCard></LargeCard>
        <div className="row">
          <h2>Cards</h2>
          <div className="card-row">
            <Card
              date={"June 20, 2021"}
              name={
                "SPHERE Insights: 6 Things to Know about Active Directory and Data Risk"
              }
              image={Background}
              chips={["News", "Data", "Business"]}
            ></Card>
            <Card
              date={"July 1, 2021"}
              name={"SPHERE Insights: Key Active Directory Concepts to Master"}
              image={BackgroundTwo}
              chips={["News", "Whitepaper"]}
            ></Card>
          </div>
        </div>
        <div className="row">
          <h3>Buttons</h3>
          <h2 className="general">General</h2>
          <div className="button-row">
            <a href="/" className="gen-primary">
              Primary Button
            </a>
            <a href="/" className="sb-secondary">
              Secondary Button
            </a>
          </div>
        </div>
        <div className="row">
          <h3>Buttons</h3>
          <h2>SphereBoard</h2>
          <div className="button-row">
            <a href="/" className="sb-primary">
              Primary Button
            </a>
            <a href="/" className="sb-secondary">
              Secondary Button
            </a>
          </div>
        </div>
        <div className="row">
          <h3>Buttons</h3>
          <h2 className="experts">SphereExperts</h2>
          <div className="button-row">
            <a href="/" className="se-primary">
              Primary Button
            </a>
            <a href="/" className="se-secondary">
              Secondary Button
            </a>
          </div>
        </div>
        <div className="row">
          <h2>Inputs</h2>
          <div className="input-row">
            <input placeholder="Your name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Company"></input>
            <input placeholder="Interest"></input>
            <textarea placeholder="Your message"></textarea>
            <a href="/" className="form-btn">
              Send
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
