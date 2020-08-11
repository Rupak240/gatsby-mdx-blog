import React from "react"

import { ContainerWrapper } from "../elements/ContainerElements"

import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
