import { Typography, Avatar } from "@mui/material";
import { Box, Stack, Container } from "@mui/system";
import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ConstructionIcon from "@mui/icons-material/Construction";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

type Props = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

const IconBox = ({ icon, title, description }: Props) => {
  return (
    <Box
      width='100%'
      sx={{
        maxWidth: { xs: "unset", lg: "320px" },
        mt: { xs: "24px", lg: "0px" },
      }}
    >
      <Stack
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        spacing='16px'
      >
        <Stack
          flexDirection='inherit'
          alignItems='inherit'
          justifyContent='inherit'
          spacing='12px'
        >
          {icon}
          <Typography
            textAlign='center'
            fontWeight={600}
            fontSize='18px'
            lineHeight={"22px"}
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          textAlign='center'
          color='grey.600'
          fontSize='16px'
          lineHeight='20px'
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

export const IconSection = () => {
  return (
    <Container maxWidth='lg'>
      <Typography
        component='h2'
        fontWeight={600}
        textAlign='center'
        sx={{
          fontSize: { xs: "34px", lg: "48px" },
        }}
      >
        Che cosa facciamo
      </Typography>
      <Box
        sx={{
          mt: {
            xs: "24px",
            lg: "48px",
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          <IconBox
            icon={
              <Avatar
                variant='circular'
                sx={{
                  width: "72px",
                  height: "72px",
                  background: "#E9E3FF",
                }}
              >
                <DesignServicesIcon
                  sx={{
                    fontSize: "36px",
                    color: "purple.400",
                    fill: "purple.400",
                  }}
                />
              </Avatar>
            }
            title={"Design"}
            description='Realizziamo design personalizzati senza utilizzare template, creando prodotti originali e modellati su ogni business'
          />

          <IconBox
            icon={
              <Avatar
                variant='circular'
                sx={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(26, 201, 159, 0.26)",
                }}
              >
                <CreateNewFolderIcon
                  sx={{
                    fontSize: "36px",
                    color: "green.300",
                    fill: "green.300",
                  }}
                />
              </Avatar>
            }
            title={"Gestionale"}
            description='Sarà possibile modificare sezioni del proprio sito grazie ad un gestionale comodo e pratico'
          />

          <IconBox
            icon={
              <Avatar
                variant='circular'
                sx={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(255, 52, 52, 0.17)",
                }}
              >
                <ConstructionIcon
                  sx={{
                    fontSize: "36px",
                    color: "red.300",
                    fill: "red.300",
                  }}
                />
              </Avatar>
            }
            title={"Manutenzione"}
            description='Saremo a vostra disposizione per supportarvi ogni qualvolta si verificasse un problema'
          />
        </Stack>
      </Box>
    </Container>
  );
};
