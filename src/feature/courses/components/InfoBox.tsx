import { Button, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { BorderBox } from "../../../components/layout"
import SeoLink from "../../../components/shared/SeoLink"
import { CourseInfoProps, ResponsiveInfoProps } from "../../../types"
import { createStarReview } from "../../../utils/general"
import { convertToHHMMSS, dateFormatter } from "../../../utils/helpers"
import { triggerGACustomEvent } from "../../../utils/tracking"

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
        fontWeight={500}
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
              text={`Supporto Preimum`}
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
}

export const PaybleCourseInfoBanner = ({
  livello = `Principiante`,
  lezioni,
  durata,
  progetti = 0,
  students,
  avgVote,
  price,
}: PayableCourseProps) => (
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
        fontWeight={500}
        sx={{
          fontSize: `14px`,
        }}
      >
        Informazioni aggiuntive
      </Typography>
      <Box mt="9px">
        <Stack spacing="6px">
          <InfoText key={`livello`} text={`Livello: ${livello}`} weight={400} />
          <InfoText key={`lezioni`} text={`${lezioni} lezioni`} weight={400} />
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
          {students ? (
            <InfoText
              key={`studenti`}
              text={`${students} studenti iscritti`}
              weight={400}
            />
          ) : null}
          <Box py="3px">
            <Stack direction="row" alignItems="center" spacing={0.1}>
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
            text={`Prezzo originale: ${price}`}
            weight={400}
          />
          <Stack spacing="4px" direction="row" alignItems="center">
            <InfoText key={`Supporto`} text={`Supporto Preimum`} weight={300} />
            <CheckCircleIcon
              sx={{
                color: `pruple.400`,
              }}
              fontSize="small"
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  </BorderBox>
)

const CourseInfo = ({
  livello,
  lezioni,
  durata,
  progetti,
  recensioni,
  categoria,
  tipologia,
  lastUpdate,
  link,
}: CourseInfoProps & { link: string }) => (
  <Box
    width="100%"
    sx={{
      border: `1px solid`,
      borderColor: `purple.200`,
      borderRadius: `24px`,
      p: `24px 16px`,
      display: { xs: `none`, lg: `block` },
    }}
  >
    <Typography
      color="grey.800"
      fontWeight={500}
      sx={{
        fontSize: `14px`,
      }}
    >
      Informazioni
    </Typography>

    <Box mt="9px">
      <Stack direction="row" spacing="18px" alignItems="center">
        <Box>
          <InfoText key={`livello`} text="Livello:" weight={300} />
          <InfoText key={`lezioni`} text="Lezioni:" weight={300} />
          <InfoText key={`durata`} text="Durata:" weight={300} />
          <InfoText key={`categoria`} text="Categoria:" weight={300} />
          <InfoText key={`tipologia`} text="Tipologia:" weight={300} />
          <InfoText key={`last-update`} text="Last Update:" weight={300} />
          <InfoText key={`progetti`} text="Progetti:" weight={300} />
          <InfoText key={`recensioni`} text="Recensioni:" weight={300} />
        </Box>

        <Box>
          <InfoText key={`livello-${livello}`} text={livello} weight={400} />
          <InfoText key={`lezioni-${lezioni}`} text={lezioni} weight={400} />
          <InfoText
            key={`durata-${durata}`}
            text={convertToHHMMSS(durata)}
            weight={400}
          />
          <InfoText
            key={`categoria-${categoria}`}
            text={categoria}
            weight={400}
          />
          <InfoText
            key={`tipologia-${tipologia}`}
            text={tipologia}
            weight={400}
          />
          <InfoText
            key={`data-${lastUpdate}`}
            text={dateFormatter(lastUpdate)}
            weight={400}
          />
          <InfoText key={`progetti-${progetti}`} text={progetti} weight={400} />
          <Box py="3px">
            <Stack direction="row" alignItems="center" spacing={0.1}>
              {createStarReview(recensioni)}

              <Typography
                fontWeight={300}
                color="gray.700"
                sx={{
                  fontSize: `10px`,
                }}
              >
                {`(${recensioni.toString().split(`.`).join(`,`)})`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box mt="12px">
        <SeoLink isExternal link={link} rel="nofollow">
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            sx={{
              borderRadius: `100px`,
              width: `100%`,
            }}
            onClick={
              tipologia.toLowerCase() === `free`
                ? undefined
                : triggerGACustomEvent(
                    { event: `click_to_udemy` },
                    { hasLocation: true }
                  )
            }
          >
            {tipologia.toLowerCase() === `free`
              ? `Vedi su Youtube`
              : `Visualizza su Udemy`}
          </Button>
        </SeoLink>
      </Box>
    </Box>
  </Box>
)

const ResponsiveInfoBox = ({
  livello,
  lezioni,
  progetti,
  recensioni,
  durata,
  tipologia,
  link,
}: ResponsiveInfoProps & { link: string }) => (
  <Box
    width="100%"
    sx={{
      border: `1px solid`,
      borderColor: `purple.200`,
      borderRadius: `24px`,
      p: `24px 16px`,
      display: { xs: `block`, lg: `none` },
    }}
  >
    <Typography
      color="grey.800"
      fontWeight={500}
      sx={{
        fontSize: `14px`,
      }}
    >
      Informazioni
    </Typography>

    <Box mt="9px">
      <Stack direction="row" spacing="18px" alignItems="center">
        <Box>
          <InfoText text="Livello:" weight={300} />
          <InfoText text="Lezioni:" weight={300} />
          <InfoText text="Durata:" weight={300} />
          <InfoText text="Progetti:" weight={300} />
          <InfoText text="Recensioni:" weight={300} />
        </Box>

        <Box>
          <InfoText text={livello} weight={400} />
          <InfoText text={lezioni} weight={400} />
          <InfoText text={convertToHHMMSS(durata)} weight={400} />
          <InfoText text={progetti} weight={400} />
          <Box py="3px">
            <Stack direction="row" alignItems="center" spacing={0.1}>
              <Box>{createStarReview(recensioni)}</Box>

              <Typography
                fontWeight={300}
                color="gray.700"
                sx={{
                  fontSize: `10px`,
                }}
              >
                {`(${recensioni.toString().split(`.`).join(`,`)})`}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Box mt="12px">
        <SeoLink isExternal link={link} rel="nofollow">
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            sx={{
              borderRadius: `100px`,
              width: `100%`,
            }}
            onClick={
              tipologia.toLowerCase() === `free`
                ? undefined
                : triggerGACustomEvent(
                    { event: `click_to_udemy` },
                    { hasLocation: true }
                  )
            }
          >
            {tipologia.toLowerCase() === `free`
              ? `Vedi su Youtube`
              : `Visualizza su Udemy`}
          </Button>
        </SeoLink>
      </Box>
    </Box>
  </Box>
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

export { CourseInfo, ResponsiveInfoBox }
