import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import { navigate } from "@reach/router"
import { BorderBox } from "../../../components/layout"
import { PaybleCourseInfoBanner } from "./InfoBox"
import { triggerGACustomEvent } from "../../../utils/tracking"

type Props = {
  image: IGatsbyImageData | undefined | null
  price: number
  link?: string
  lezioni: number
  livello: string
  avgVote: number
  durata: number
  progetti: number
  students: number
}

export const ImageBox = styled(Box)`
  width: 90px;
  border-radius: 8px;
  overflow: hidden;
  transform: translateZ(0);
  margin-left: 18px;
  @media screen and (min-width: 1024px) {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 0px;
  }
`

export const PayableCourseBanner = ({
  image,
  price,
  link,
  lezioni,
  avgVote,
  durata,
  livello,
  progetti,
  students,
}: Props) => {
  const handleBuyCourse = React.useCallback(() => {
    if (link) {
      triggerGACustomEvent({ event: `click_to_udemy` })()
      navigate(link)
    }
  }, [link])
  return (
    <BorderBox
      borderRadius="8px"
      width="100%"
      sx={{
        maxWidth: { xs: `unset`, lg: `341px` },
        position: { xs: `fixed`, lg: `static` },
        bottom: { xs: `0`, lg: `unset` },
        right: { xs: `0`, lg: `unset` },
        left: { xs: `0`, lg: `unset` },
        backgroundColor: `#fff`,
      }}
    >
      <Stack
        flexDirection={{ xs: `row`, lg: `column` }}
        alignItems="center"
        justifyContent={{ xs: `space-between`, lg: `unset` }}
      >
        <ImageBox>
          {image ? <GatsbyImage image={image} alt="Copertina" /> : null}
        </ImageBox>
        <Box
          p="16px"
          pb={{ xs: `16px`, lg: `0px` }}
          sx={{
            marginRight: { xs: `15px`, lg: `0` },
            width: { xs: `60%`, lg: `100%` },
          }}
        >
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={21} fontWeight={500}>
              12,99€
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={400}
              color="#6C757D"
              sx={{ textDecoration: `line-through` }}
            >{`${(price / 100).toFixed(2)} €`}</Typography>
            <Typography
              fontSize={12}
              fontWeight={500}
              color="#6C757D"
            >{`${Math.ceil(100 - (12.99 * 100) / (price / 100)).toFixed(
              0
            )}% sconto`}</Typography>
          </Stack>

          <Box marginTop={{ xs: `none`, lg: `10px` }}>
            <Button
              variant="contained"
              color={`primary`}
              size="small"
              onClick={handleBuyCourse}
              sx={{
                borderRadius: `4px`,
                width: `100%`,
                height: `28px`,
              }}
            >
              Acquista
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: `none`, lg: `block` }, width: `100%` }}>
          <PaybleCourseInfoBanner
            lezioni={lezioni}
            livello={livello}
            price={price}
            avgVote={avgVote}
            durata={durata}
            progetti={progetti}
            students={students}
            sx={{ border: `none !important` }}
          />
        </Box>
      </Stack>
    </BorderBox>
  )
}
