import React from "react"
import Box from "@mui/system/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import CardHeader from "./CardHeader"
import { getIcon } from "../../utils/general"
import { InsegnanteProps } from "../../types/course"
import { createBrandText } from "../../utils/helpers"
import SeoLink from "./SeoLink"

const CustomStack = styled(Box)`
  & > * {
    padding: 16px 8px;
    &:not(:first-of-type) {
      border-top: 1px solid;
      border-top-color: var(--purple-200);
    }
  }
  strong {
    color: var(--grey-600);
  }

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;

    & > * {
      padding: 24px;

      &:not(:first-of-type) {
        border-top: none;
        border-bottom-color: none;
        border-left: 1px solid;
        border-left-color: var(--purple-200);
      }
    }
  }
`

const Insegnante = ({
  nome,
  bio,
  corsi,
  professione,
  cognome,
  img,
}: InsegnanteProps) => (
  <Box
    sx={{
      border: `1px solid`,
      borderColor: `purple.200`,
      width: `100%`,
      borderRadius: { xs: `16px`, lg: `24px` },
    }}
  >
    <CustomStack>
      <Box>
        <CardHeader
          variant="circular"
          spacing={[1, 2]}
          alignItems="center"
          img={
            <Box
              sx={{
                height: { xs: `34px`, lg: `64px` },
                width: { xs: `34px`, lg: `64px` },
                borderRadius: `50%`,
                overflow: `hidden`,
                transform: `translateZ(0)`,
              }}
            >
              <GatsbyImage
                image={getImage(img) as IGatsbyImageData}
                alt={nome}
              />
            </Box>
          }
        >
          <Box>
            <Box>
              <Typography
                color="purple.800"
                fontWeight={500}
                sx={{
                  fontSize: { xs: `16px`, lg: `18px` },
                }}
              >
                {`${nome} ${cognome}`}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { xs: `4px`, lg: `6px` },
              }}
            >
              <Typography
                color="grey.500"
                fontWeight={400}
                sx={{
                  fontSize: { xs: `12px`, lg: `14px` },
                }}
              >
                {professione}
              </Typography>
            </Box>
          </Box>
        </CardHeader>
        <Box
          sx={{
            mt: { xs: `16px`, lg: `24px` },
            maxWidth: { xs: `325px`, lg: `688px` },
          }}
        >
          <Typography
            color="grey.500"
            fontWeight={300}
            dangerouslySetInnerHTML={{
              __html: bio.childMarkdownRemark.html,
            }}
            sx={{
              fontSize: { xs: `14px`, lg: `16px` },
              lineHeight: { xs: `21px`, lg: `24px` },
            }}
          />
        </Box>
      </Box>

      <Box>
        <Box>
          <Typography
            color="grey.800"
            fontWeight={600}
            sx={{
              fontSize: { xs: `14px`, md: `16px` },
            }}
          >
            Insegna in
          </Typography>
          <Box
            sx={{
              mt: { xs: `8px`, lg: `12px` },
            }}
          >
            {corsi.map((corso) => (
              <SeoLink link={`/${corso.slug}/`} isExternal={false}>
                <Box mb="6px">
                  <Stack direction="row" spacing={[1]} alignItems="baseline">
                    <Box display="flex">
                      {getIcon(corso.category[0].slug, {
                        xs: `10px`,
                        lg: `12px`,
                      })}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: `12px`, lg: `14px` },
                        fontWeight: 500,
                      }}
                      color="purple.400"
                      dangerouslySetInnerHTML={{
                        __html: createBrandText(corso.titolo) as string,
                      }}
                    />
                  </Stack>
                </Box>
              </SeoLink>
            ))}
          </Box>
        </Box>
      </Box>
    </CustomStack>
  </Box>
)

export default Insegnante
