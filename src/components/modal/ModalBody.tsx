import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Box from "@mui/system/Box"

export const ModalBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`

export const ModalTypography = styled(Typography)`
  color: var(--gray-500);
  text-align: center;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 27px;
  }
`
