import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "./"

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
)
