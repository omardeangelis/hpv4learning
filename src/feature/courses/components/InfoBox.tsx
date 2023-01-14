import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box, { BoxProps } from "@mui/system/Box"
import React from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { BorderBox } from "../../../components/layout"
import { createStarReview } from "../../../utils/general"
import { convertToHHMMSS } from "../../../utils/helpers"

type FreeBannerProps = {
  livello: string
  durata: number
  progetti: number
}

export const FreeCourseInfoBanner = ({
  livello,
  durata,
  progetti,
}: FreeBannerProps) => (
  <BorderBox
    borderRadius="8px"
    width="100%"
    sx={{
      maxWidth: { xs: `unset`, lg: `341px` },
    }}
  >
    <Box p="18px">
      <Typography
        color="grey.800"
        fontWeight={600}
        sx={{
          fontSize: `14px`,
        }}
      >
        Informazioni aggiuntive
      </Typography>
      <Box mt="9px">
        <Stack spacing="6px">
          <InfoText key={`livello`} text={`Livello: ${livello}`} weight={400} />
          <InfoText
            key={`durata`}
            text={`${convertToHHMMSS(durata)} ore di videocorso`}
            weight={400}
          />
          {progetti > 0 ? (
            <InfoText
              key={`Progetti`}
              text={`${progetti}: Progetti pratici`}
              weight={400}
            />
          ) : null}
          <InfoText
            key={`Prezzo`}
            text={`Prezzo originale: Gratuito`}
            weight={400}
          />
          <Stack spacing="4px" direction="row" alignItems="center">
            <InfoText
              key={`Supporto`}
              text={`Supporto Premium`}
              weight={300}
              style={{
                textDecoration: `line-through`,
                color: `grey.500`,
              }}
            />
            <CheckCircleIcon
              sx={{
                color: `grey.500`,
              }}
              fontSize="small"
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  </BorderBox>
)

type PayableCourseProps = {
  lezioni: number
  durata: number
  students?: number
  avgVote: number
  price: number
  progetti?: number
  livello?: Queries.Maybe<string>
} & BoxProps

export const PaybleCourseInfoBanner = ({
  livello = `Principiante`,
  lezioni,
  durata,
  progetti = 0,
  students,
  avgVote,
  price,
  ...rest
}: PayableCourseProps) => (
  <BorderBox
    borderRadius="8px"
    width="100%"
    sx={{
      maxWidth: { xs: `unset`, lg: `341px` },
    }}
    {...rest}
  >
    <Box p="16px">
      <Typography
        color="grey.800"
        fontWeight={600}
        sx={{
          fontSize: `14px`,
        }}
      >
        Informazioni aggiuntive
      </Typography>
      <Box mt="4px">
        <Stack>
          <InfoText key={`livello`} text={`Livello: ${livello}`} weight={300} />
          <InfoText key={`lezioni`} text={`${lezioni} lezioni`} weight={300} />
          <InfoText
            key={`durata`}
            text={`${durata} ore di videocorso`}
            weight={300}
          />
          {progetti > 0 ? (
            <InfoText
              key={`Progetti`}
              text={`${progetti} Progetti pratici`}
              weight={300}
            />
          ) : null}
          {students ? (
            <InfoText
              key={`studenti`}
              text={`${students} studenti iscritti`}
              weight={300}
            />
          ) : null}
          <Box py="3px">
            <Stack direction="row" alignItems="center" spacing={0.3}>
              <Typography
                fontWeight={300}
                sx={{
                  fontSize: `14px`,
                }}
              >
                Voto Medio:
              </Typography>
              {createStarReview(avgVote)}
              <Typography
                fontWeight={300}
                color="purple.400"
                sx={{
                  fontSize: `10px`,
                }}
              >
                {avgVote}
              </Typography>
            </Stack>
          </Box>
          <InfoText
            key={`Prezzo`}
            text={`Prezzo originale: ${(price / 100).toFixed(2)}€`}
            weight={300}
          />
          <Stack spacing="4px" direction="row" alignItems="center">
            <InfoText key={`Supporto`} text={`Supporto Premium`} weight={300} />
            <CheckCircleIcon
              sx={{
                color: `purple.400`,
              }}
              fontSize="small"
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  </BorderBox>
)

const InfoText = ({
  text,
  weight,
  style,
}: {
  text: string | number
  weight: 300 | 400
  style?: Record<string, string | number | undefined>
}) => (
  <Box py="3px">
    <Typography
      fontWeight={weight}
      sx={{
        fontSize: `14px`,
        ...style,
      }}
    >
      {text}
    </Typography>
  </Box>
)
