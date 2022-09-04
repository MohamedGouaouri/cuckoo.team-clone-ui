import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "#cef2f1",
    color: "#282c34"
}

export const darkTheme = {
    body: "#282c34",
    color: "#bffaff"
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.color};
  }
`