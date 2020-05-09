import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github-square.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter-square.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="https://github.com/SGarcia710" target="_blank">
            <img src={data.github.publicURL} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-garcia-ospina/"
            target="_blank"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin logo" />
          </a>
          <a href="https://twitter.com/sebg96" target="_blank">
            <img src={data.twitter.publicURL} alt="Twitter logo" />
          </a>
        </FooterSocialIcons>

        <P size="xSmall" color="dark3">
          Made with ❤️ by @SGarcia710
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
