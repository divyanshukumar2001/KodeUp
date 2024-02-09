import React from "react"
import { Box, styled } from "@mui/material"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
// import { Controlled as ControlledEditor } from "react-codemirror2"
// import "codemirror/lib/codemirror.css"
// import "codemirror/theme/material.css"
// import "codemirror/mode/xml/xml"
// import "codemirror/mode/javascript/javascript"
// import "codemirror/mode/css/css"

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 8px 12px;
`

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #a8b3ab;
  font-size: 13px;
  justify-content: space-between;
  font-weight: 700;
`

const Editor = () => {
  return (
    <Box>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: "red",
              height: 11,
              width: 12,
              display: "flex",
              placeContent: "center",
              borderRadius: 3,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            /
          </Box>
          html
        </Heading>
        <CloseFullscreenIcon style={{ width: 13 }} />
      </Header>
      <ControlledEditor />
    </Box>
  )
}

export default Editor
