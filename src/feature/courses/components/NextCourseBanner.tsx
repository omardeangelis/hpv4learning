import { Button, Divider, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import MoneyOffCsredSharpIcon from "@mui/icons-material/MoneyOffCsredSharp"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import TimerIcon from "@mui/icons-material/Timer"
import CodeIcon from "@mui/icons-material/Code"
import { BorderBox } from "../../../components/layout"

type Props = {
  isFree?: boolean
}

const NextCourseBanner: React.FC<Props> = ({ isFree }) => (
  <BorderBox
    sx={{
      borderRadius: `8px`,
      width: `100%`,
    }}
  >
    <Box
      sx={{
        padding: `16px`,
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          maxWidth="64px"
          height="36px"
          width="100%"
          sx={{
            borderRadius: `4px`,
            overflow: `hidden`,
            background: `red`,
            transform: `translateZ(0)`,
          }}
        >
          {/* <GatsbyImage image={undefined} alt="text" /> */}
        </Box>
        <Box ml="8px" width="100%">
          <Typography
            sx={{
              fontSize: `14px`,
              lineHeight: `18px`,
              fontWeight: 600,
            }}
          >
            Continua ad imparare
          </Typography>
          <Box mt="4px">
            <Typography
              sx={{
                fontSize: `12px`,
                lineHeight: `18px`,
              }}
            >
              Lorem ipsum dolor sit amet....
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Box mt="12px">
        <Divider />
      </Box>
      <Box mt="12px">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {isFree ? (
            <MoneyOffCsredSharpIcon
              sx={{
                color: `purple.400`,
              }}
              fontSize="small"
            />
          ) : (
            <AttachMoneyIcon
              sx={{
                color: `purple.400`,
              }}
              fontSize="small"
            />
          )}

          <Stack flexDirection="row" alignItems="center">
            <TimerIcon fontSize="small" />
            <Typography
              sx={{
                ml: `4px`,
                fontSize: `12px`,
                lineHeight: `14px`,
              }}
            >
              17.5
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <CodeIcon fontSize="small" />
            <Typography
              sx={{
                ml: `4px`,
                fontSize: `12px`,
                lineHeight: `14px`,
              }}
            >
              17.5
            </Typography>
          </Stack>
          <Button variant="outlined" color="primary" size="small">
            Inizia
          </Button>
        </Stack>
      </Box>
    </Box>
  </BorderBox>
)

export default NextCourseBanner
