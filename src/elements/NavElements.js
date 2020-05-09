import styled from "styled-components"

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  grid-column: 2 / span 12;
  grid-row: 1 / 2;

  img {
    height: 30px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
