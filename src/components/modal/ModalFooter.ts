import styled from "@emotion/styled"
import Box from "@mui/system/Box"

export const ModalFooter = styled(Box)({
  marginTop: `24px`,
  marginBottom: `24px`,
  marginLeft: `auto`,
  marginRight: `auto`,
  width: `100%`,
  "@media screen and (min-width: 769px)": {
    marginTop: `auto`,
  },
})
