import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image"
import dayjs from "dayjs"
import { dateFormatter } from "../../utils/helpers"
import SeoLink from "../shared/SeoLink"
import { triggerGACustomEvent } from "../../utils/tracking"

const StyledBox = styled(Box)`
  border: 1px solid;
  border-color: var(--purple-200);
  max-width: 660px;
  width: 100%;
`

type Props = {
  title: string
  date: Date | string
  prezzo: number
  link: string
  img: ImageDataLike
}

const CourseBanner = ({ title, date, prezzo, link, img }: Props) => (
  <StyledBox
    sx={{
      p: `12px`,
      borderRadius: `14px`,
    }}
  >
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: {
                xs: `48px`,
                lg: `54px`,
              },
              height: {
                xs: `48px`,
                lg: `54px`,
              },
              borderRadius: `50%`,
              transform: `translateZ(0)`,
              overflow: `hidden`,
              flexGrow: 1,
            }}
          >
            <GatsbyImage
              style={{
                height: `100%`,
              }}
              image={getImage(img) as IGatsbyImageData}
              alt={title}
            />
          </Box>
          <Box>
            <Typography
              fontWeight={600}
              color="grey.7"
              maxWidth="284px"
              sx={{
                fontSize: { xs: `12px`, lg: `14px` },
                lineHeight: `18px`,
              }}
            >
              {`${title.slice(0, 32)}...`}
            </Typography>

            <Box
              sx={{
                mt: { xs: `6px` },
              }}
            >
              <Typography fontWeight={300} fontSize="10px">
                {`Scade il: ${dateFormatter(
                  dayjs(date).add(30, `day`).toString()
                )}`}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box display="flex" alignItems="flex-end" flexDirection="column">
          <Typography
            fontWeight={400}
            color="grey.5"
            maxWidth="284px"
            sx={{
              fontSize: `10px`,
              lineHeight: `18px`,
              textDecoration: `line-through`,
            }}
          >
            {`${(prezzo / 100).toFixed(2)}€`}
          </Typography>

          <Box
            fontWeight={300}
            sx={{
              mt: { xs: `12px` },
            }}
          >
            <SeoLink isExternal link={link} target="_blank" rel="nofollow">
              <Button
                variant="contained"
                size="small"
                sx={{
                  height: { xs: `18px`, lg: `24px` },
                  minWidth: { xs: `18px`, lg: `24px` },
                  padding: `0px 16px`,
                  borderRadius: `8px`,
                  fontSize: {
                    xs: `10px`,
                    lg: `12px`,
                  },
                }}
                onClick={triggerGACustomEvent(
                  { event: `click_to_udemy` },
                  { hasLocation: true }
                )}
              >
                {`Solo 12.99€`}
              </Button>
            </SeoLink>
          </Box>
        </Box>
      </Stack>
    </Box>
  </StyledBox>
)

export default CourseBanner
