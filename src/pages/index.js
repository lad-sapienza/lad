//React
import React from "react";

//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";

//Bootstap
import { Container, Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";

const Index = () => {
  return (
    <Layout>
      <BlogPreview/>
    </Layout>
  );
};

export default Index;
