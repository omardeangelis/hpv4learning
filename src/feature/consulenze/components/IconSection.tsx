import React from "react"
import Box from "@mui/system/Box"
import Stack from "@mui/system/Stack"
import Container from "@mui/system/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import DesignServicesIcon from "@mui/icons-material/CodeRounded"
import CameraIcon from "@mui/icons-material/VideoCallRounded"

type Props = {
  icon: React.ReactElement
  title: string
  description: string
}

const IconBox = ({ icon, title, description }: Props) => (
  <Box
    width="100%"
    sx={{
      maxWidth: { xs: `unset`, lg: `320px` },
      mt: { xs: `24px`, lg: `0px` },
    }}
  >
    <Stack
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      spacing="16px"
    >
      <Stack
        flexDirection="inherit"
        alignItems="inherit"
        justifyContent="inherit"
        spacing="12px"
      >
        {icon}
        <Typography
          textAlign="center"
          fontWeight={600}
          fontSize="18px"
          lineHeight={`22px`}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        textAlign="center"
        color="grey.600"
        fontSize="16px"
        lineHeight="20px"
      >
        {description}
      </Typography>
    </Stack>
  </Box>
)

export const IconSection = () => (
  <Container maxWidth="lg">
    <Typography
      component="h2"
      fontWeight={600}
      textAlign="center"
      sx={{
        fontSize: { xs: `34px`, lg: `48px` },
        lineHeight: { xs: `39px`, lg: `56px` },
      }}
    >
      Che cosa facciamo
    </Typography>
    <Box
      sx={{
        mt: {
          xs: `24px`,
          lg: `48px`,
        },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: `column`, lg: `row` },
          justifyContent: `center`,
          alignItems: `stretch`,
          gap: `48px`,
        }}
      >
        <IconBox
          icon={
            <Avatar
              variant="circular"
              sx={{
                width: `72px`,
                height: `72px`,
                background: `#E9E3FF`,
              }}
            >
              <DesignServicesIcon
                sx={{
                  fontSize: `36px`,
                  color: `purple.400`,
                  fill: `purple.400`,
                }}
              />
            </Avatar>
          }
          title={`Frontend & SSR`}
          description="Formazione e corsi per sviluppare web app con React, Next.js e Gatsby, seguendo le best practices"
        />

        <IconBox
          icon={
            <Avatar
              variant="circular"
              sx={{
                width: `72px`,
                height: `72px`,
                background: `rgba(26, 201, 159, 0.26)`,
              }}
            >
              <CameraIcon
                sx={{
                  fontSize: `36px`,
                  color: `green.300`,
                  fill: `green.300`,
                }}
              />
            </Avatar>
          }
          title={`VideoMaking`}
          description="Offriamo formazione tramite videocorsi e presso la nostra struttura per diventare un professionista del video making"
        />
      </Stack>
    </Box>
  </Container>
)
