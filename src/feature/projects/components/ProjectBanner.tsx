import React from "react"
import styled from "@emotion/styled"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/system/Box"
import { useSelector, useDispatch } from "react-redux"
import SeoLink from "../../../components/shared/SeoLink"
import { createRowText } from "../../../utils/helpers"
import { RootState } from "../../../store"
import { triggerGACustomEvent } from "../../../utils/tracking"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import truncate from "lodash/truncate"

interface Props {
  courseTitle?: string | null
  prezzo?: number | null
  couponLink?: string | null
  image?: IGatsbyImageData | null
}

const BannerContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 1px 2px 0px #0000001a;
  padding: 8px 16px;
  background: #fff;
  z-index: 4;
  @media screen and (min-width: 1024px) {
    position: sticky;
    right: 5%;
    top: 140px;
    left: unset;
    bottom: unset;
    width: 362px;
    padding-left: 18px;
    padding-top: 25px;
    padding-bottom: 12px;
  }
`

export const ImageBox = styled(Box)`
  width: 90px;
  border-radius: 8px;
  overflow: hidden;
  transform: translateZ(0);
  @media screen and (min-width: 1024px) {
    width: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 0px;
  }
`

export const ProjectBanner = ({ courseTitle, couponLink, image }: Props) => {
  const { isProjectBannerOpen } = useSelector((state: RootState) => state.ui)

  if (isProjectBannerOpen) {
    return (
      <BannerContainer sx={{ border: `1px solid`, borderColor: `purple.200` }}>
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <ImageBox>
            {image ? <GatsbyImage image={image} alt="Copertina" /> : null}
          </ImageBox>

          <Stack
            flexDirection="column"
            maxWidth="218px"
            width="100%"
            spacing="10px"
          >
            <Typography
              variant="caption"
              fontWeight={500}
              sx={{
                fontSize: { xs: `12px`, lg: `14px` },
                color: { xs: `#343A40`, lg: `#000` },
                maxWidth: { xs: `220px`, lg: `100%` },
                lineHeight: { xs: `16px`, lg: `18px` },
              }}
            >
              {truncate(createRowText(courseTitle as string))}
            </Typography>

            {couponLink ? (
              <Box sx={{ width: { xs: `unset`, lg: `100%` } }}>
                <SeoLink isExternal link={couponLink} rel="noopener">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={triggerGACustomEvent(
                      { event: `click_to_udemy` },
                      { hasLocation: true }
                    )}
                    sx={{
                      width: `100%`,
                      height: `27px`,
                      background: `#8769FE`,
                      color: `#fff`,
                      borderRadius: `4px`,
                    }}
                  >
                    Vedi Corso
                  </Button>
                </SeoLink>
              </Box>
            ) : null}
          </Stack>
        </Stack>
      </BannerContainer>
    )
  }
  return null
}
