import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded"
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined"
import styled from "@emotion/styled"
import { convertToHHMMSS } from "../../utils/helpers"

type Props = { livello: string; oreDiLezione: number }

const CustomStack = styled.div`
  & > * {
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > *:not(:first-of-type) {
      margin-left: 8px;
    }
  }
`

const CourseIcons = ({ livello, oreDiLezione }: Props) => (
  <Box>
    <CustomStack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={0.5}
      >
        <EqualizerOutlinedIcon
          sx={{
            fontSize: { xs: `10px`, lg: `12px` },
            color: `purple.400`,
          }}
        />
        <Typography fontWeight={500} fontSize="12px" color="purple.400">
          {livello}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={0.5}
      >
        <AccessTimeRoundedIcon
          sx={{
            fontSize: { xs: `10px`, lg: `12px` },
            color: `purple.400`,
          }}
        />
        <Typography fontWeight={500} fontSize="12px" color="purple.400">
          {`${convertToHHMMSS(oreDiLezione, true)} ore`}
        </Typography>
      </Stack>
    </CustomStack>
  </Box>
)

export default CourseIcons
