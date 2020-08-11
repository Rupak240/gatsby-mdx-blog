import React from "react"
import { useStaticQuery } from "gatsby"

import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements/FooterElements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }

      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook logo" />
          </a>

          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Github logo" />
          </a>
        </FooterSocialIcons>
        <p>&copy; 2020 Company. All rights reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
