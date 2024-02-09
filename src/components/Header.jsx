import React from "react"
import { AppBar, Toolbar, styled } from "@mui/material"
import Codeup from "../logo2.png"

const Container = styled(AppBar)`
  background: #060606;
  height: 10vh;
`

const Header = () => {
  return (
    <Container position="static">
      <Toolbar>
        <img
          src={Codeup}
          alt="alt"
          style={{ width: 30, position: "absolute", top: "1vh" }}
        />
      </Toolbar>
    </Container>
  )
}

export default Header
