import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"

const NotFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Oh... La página que estás buscando no pudo ser encontrada
        </H1>
      </Content>
    </Container>
  )
}

export default NotFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "police-not-found.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
