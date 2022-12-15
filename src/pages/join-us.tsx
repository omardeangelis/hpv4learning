import styled from "@emotion/styled"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Box from "@mui/system/Box"
import React from "react"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"
import SeoLink from "../components/shared/SeoLink"
import Layout from "../components/shared/layout"
import { jobs } from "../asset/jobsdata"
import MetaDecorator from "../components/SEO/components/MetaDecorator"
import LinkHandler from "../components/SEO/components/LinkHandler"
import WebPageSchema from "../components/SEO/components/WebPageSchema"
import { triggerGACustomEvent } from "../utils/tracking"

const CustomStack = styled(Box)`
  .desktop-image {
    display: none;
  }

  @media screen and (min-width: 767px) {
    .desktop-image {
      display: block;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const JobsStack = styled(Box)`
  & > *:not(:first-of-type) {
    margin-top: 48px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:first-of-type) {
      margin-top: 0px;
    }
    display: flex;
    justify-content: space-between;
  }
`

const JoinUs = () => (
  <Layout disableColor>
    <Box
      sx={{
        background: `linear-gradient(180deg, #341268, #8769FE)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: `124px`, lg: `174px` },
            mt: `-72px`,
          }}
        >
          <CustomStack>
            <Box className="desktop-image">
              <img src="/join-img.svg" alt="lavora con noi" />
            </Box>
            <Box>
              <Typography
                fontWeight={700}
                color="purple.200"
                component="h1"
                sx={{
                  textAlign: { xs: `center`, md: `left` },
                  fontSize: { xs: `40px`, lg: `72px` },
                  lineHeight: { xs: `49px`, lg: `79px` },
                }}
              >
                Lavora con noi
              </Typography>
              <Box
                sx={{
                  textAlign: { xs: `center`, md: `left` },

                  mt: { xs: `24px`, lg: `32px` },
                  maxWidth: { xs: `unset`, lg: `453px` },
                }}
              >
                <Typography
                  fontWeight={500}
                  color="purple.200"
                  component="h2"
                  sx={{
                    textAlign: { xs: `center`, md: `left` },

                    fontSize: { xs: `18px`, lg: `24px` },
                    lineHeight: { xs: `24px`, lg: `29px` },
                  }}
                >
                  Unisciti al nostro team di insegnanti e prendi parte al nostro
                  progetto educativo
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: { xs: `24px`, lg: `44px` },
                  maxWidth: { xs: `unset`, lg: `453px` },
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent={[`center`, `flex-start`]}
                >
                  <SeoLink
                    isExternal
                    onClick={triggerGACustomEvent({ event: `join_discord` })}
                    link={`https://discord.gg/pNhjB78F`}
                    rel="noopener"
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={
                        <ArrowRightAltSharpIcon
                          sx={{
                            color: `purple.800`,
                          }}
                        />
                      }
                      size={`large`}
                      sx={{
                        height: { xs: `48px`, lg: `72px` },
                        minWidth: { xs: `48px`, lg: `72px` },
                        px: { xs: `auto`, lg: `24px` },
                        borderRadius: `100px`,
                      }}
                    >
                      Discord
                    </Button>
                  </SeoLink>
                  <a
                    className="noselect"
                    href="mailto:hpv4learning@hpvfilm.it"
                    rel="noopener"
                    style={{
                      textDecoration: `none`,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      endIcon={
                        <ArrowRightAltSharpIcon
                          sx={{
                            color: `purple.800`,
                          }}
                        />
                      }
                      size={`large`}
                      sx={{
                        height: { xs: `48px`, lg: `72px` },
                        minWidth: { xs: `auto`, lg: `72px` },
                        px: { xs: `auto`, lg: `24px` },
                        borderRadius: `100px`,
                      }}
                    >
                      Email
                    </Button>
                  </a>
                </Stack>
              </Box>
            </Box>
          </CustomStack>

          <CustomStack
            sx={{
              mt: { xs: `122px`, lg: `248px` },
            }}
          >
            <Box>
              <Typography
                fontWeight={600}
                color="white"
                component="h2"
                sx={{
                  textAlign: { xs: `center`, md: `left` },

                  fontSize: { xs: `40px`, lg: `72px` },
                  lineHeight: { xs: `49px`, lg: `79px` },
                }}
              >
                Chi siamo
              </Typography>
              <Box
                sx={{
                  mt: { xs: `24px`, lg: `32px` },
                  maxWidth: { xs: `unset`, lg: `453px` },
                }}
              >
                <Typography
                  fontWeight={500}
                  color="white"
                  sx={{
                    textAlign: { xs: `center`, md: `left` },

                    fontSize: { xs: `18px`, lg: `24px` },
                    lineHeight: { xs: `24px`, lg: `29px` },
                  }}
                >
                  Il progetto nasce a luglio 2021 e attualmente il team
                  comprende 2 frontend developer e 2 videomaker professionisti.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { xs: `48px`, md: `0px` },
                maxWidth: { xs: `317px`, md: `unset` },
                mx: `auto`,
              }}
            >
              <img
                src="/join-us-mid.svg"
                alt="lavora con noi"
                style={{
                  maxWidth: `inherit`,
                }}
              />
            </Box>
          </CustomStack>

          <Box
            sx={{
              mt: { xs: `122px`, lg: `248px` },
            }}
          >
            <Typography
              fontWeight={600}
              color="purple.800"
              textAlign="center"
              component="h2"
              sx={{
                fontSize: { xs: `40px`, lg: `72px` },
                lineHeight: { xs: `49px`, lg: `79px` },
              }}
            >
              Mission
            </Typography>
            <Box
              sx={{
                mt: { xs: `24px`, lg: `32px` },
                maxWidth: { xs: `unset`, lg: `533px` },
                mx: `auto`,
              }}
            >
              <Typography
                fontWeight={500}
                color="purple.800"
                textAlign="center"
                sx={{
                  fontSize: { xs: `18px`, lg: `24px` },
                  lineHeight: { xs: `24px`, lg: `29px` },
                }}
              >
                Creare un piattaforma open source e libera per gli studenti e
                gli insegnanti di domani
              </Typography>
            </Box>
            <Box
              mx="auto"
              sx={{
                mt: { xs: `24px`, lg: `44px` },
                maxWidth: { xs: `unset`, lg: `453px` },
                display: `flex`,
                justifyContent: `center`,
              }}
            >
              <SeoLink link="/about/" target="_self" isExternal={false}>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={
                    <ArrowRightAltSharpIcon
                      sx={{
                        color: `purple.200`,
                      }}
                    />
                  }
                  size={`large`}
                  sx={{
                    backgroundColor: `purple.800`,
                    color: `purple.200`,
                    borderColor: `purple.200`,
                    borderRadius: `100px`,
                    height: { xs: `48px`, lg: `72px` },
                    minWidth: { xs: `auto`, lg: `72px` },
                    px: { xs: `auto`, lg: `24px` },
                    "&:hover": {
                      color: `purple.800`,
                      "& *": {
                        color: `purple.800`,
                      },
                    },
                  }}
                >
                  Insegnanti
                </Button>
              </SeoLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box
      sx={{
        py: { xs: `58px`, lg: `96px` },
        background: `linear-gradient(180deg, #E9E3FF, white )`,
      }}
    >
      <Container maxWidth="lg">
        <Box>
          <Typography
            fontWeight={600}
            color="purple.800"
            sx={{
              fontSize: { xs: `36px`, lg: `56px` },
            }}
            component="h2"
          >
            Chi cerchiamo
          </Typography>
        </Box>
        <Box mt="24px" maxWidth="834px">
          <Typography
            fontWeight={500}
            color="purple.800"
            sx={{
              fontSize: { xs: `16px`, lg: `24px` },
            }}
          >
            Persone che vogliano lavorare al progetto, non per il progetto. Che
            riconoscano l’importanza dell’educazione e la grande possibilità di
            miglioramento di cui questo settore ha bisogno.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: {
              xs: `48px`,
              lg: `64px`,
            },
          }}
        >
          <JobsStack>
            {jobs.map((job) => (
              <Box
                key={job.id}
                sx={{
                  maxWidth: { xs: `unset`, lg: `341px` },
                  width: `100%`,
                  mx: `auto`,
                  display: {
                    xs: `flex`,
                    sm: `block`,
                  },
                  flexDirection: `column`,
                  alignItems: `center`,
                }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: `unset`, sm: `286px` },
                    display: `flex`,
                  }}
                >
                  <img
                    src={`/${job.img}`}
                    alt={job.title}
                    style={{
                      maxWidth: `inherit`,
                      height: `185px`,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mt: { xs: `24px`, lg: `24px` },
                    maxWidth: { xs: `284px`, md: `unset` },
                  }}
                >
                  <Typography
                    fontWeight={600}
                    color="grey.800"
                    component="h3"
                    sx={{
                      fontSize: `24px`,
                      lineHeight: `36px`,
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Box mt="8px">
                    <Typography
                      color="#2F2E41"
                      sx={{
                        fontSize: `16px`,
                        lineHeight: `24px`,
                      }}
                    >
                      {job.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </JobsStack>
        </Box>
      </Container>
    </Box>
  </Layout>
)

export const Head = () => {
  const breadcrumbs = React.useMemo(
    () => [
      { text: `Home`, link: `/` },
      { text: `Join us`, link: `/join-us/` },
    ],
    []
  )
  return (
    <>
      <MetaDecorator
        metaTitle="Lavora con noi"
        metaDescription="Unisciti al nostro team di insegnanti e aiutaci a far crescere la community"
      />
      <LinkHandler />
      <WebPageSchema
        title="Lavora con noi"
        description="Unisciti al nostro team di insegnanti e aiutaci a far crescere la community"
        breadcrumbs={breadcrumbs}
      />
    </>
  )
}

export default JoinUs
