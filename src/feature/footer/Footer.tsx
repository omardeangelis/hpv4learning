import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { StaticImage } from "gatsby-plugin-image"
import { Box as OldBox, ResponsiveContainer } from "old-ui"
import { data } from "./footerdata"
import SeoLink from "../../components/shared/SeoLink"
import useDropDownMenu from "../../hook/useDropDown"
import { BoxExtendedProps } from "../../types/system"

const CustomStack = styled(Box)`
  a:hover {
    p {
      color: var(--grey-800) !important;
    }
  }

  & > *:not(:first-of-type) {
    margin-top: 12px;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    [id*="menu"] {
      display: block;
    }
    & > *:not(:first-of-type) {
      margin-top: 0px;
    }

    .icon-container {
      display: none;
    }
  }
`

export const Footer: React.FC<
  Omit<BoxExtendedProps<HTMLDivElement>, "children">
> = ({ ...rest }) => {
  const { toggleMenu } = useDropDownMenu(data.map((el) => el.id))
  const isDark =
    rest.background?.toString().includes(`600`) ||
    rest.background?.toString().includes(`500`) ||
    rest.background?.toString().includes(`700`)

  const textColor = isDark ? `white` : `grey.700`
  return (
    <OldBox
      as="footer"
      {...rest}
      py={{
        mobile: 48,
        md: 96,
      }}
    >
      <ResponsiveContainer variant="xl">
        <CustomStack>
          <Box
            sx={{
              display: { xs: `none`, lg: `block` },
            }}
          >
            <SeoLink isExternal={false} link="/">
              <Box
                sx={{
                  mb: { xs: `24px`, md: `0px` },
                  zIndex: 1,
                }}
              >
                <StaticImage
                  src="../../images/logo.png"
                  alt="Logo Hpv 4 Learning"
                  placeholder="dominantColor"
                  layout="fixed"
                  height={70}
                  width={70}
                />
              </Box>
            </SeoLink>
          </Box>
          {data.map((el) => (
            <Box key={el.id}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={[`space-between`, `flex-start`]}
                onClick={() => toggleMenu(el.id)}
                width="100%"
              >
                <Typography
                  color={textColor}
                  fontWeight={500}
                  sx={{
                    fontSize: `14px`,
                  }}
                >
                  {el.title}
                </Typography>
                <Box
                  className="icon-container"
                  sx={{
                    display: { xs: `block`, lg: `none` },
                  }}
                >
                  <ExpandMoreIcon
                    fontSize="small"
                    sx={{
                      color: `purple.800`,
                    }}
                  />
                </Box>
              </Stack>
              <Box mt="8px" id={`${el.id}-menu`}>
                {el.items.map((item) => (
                  <Box
                    key={item.slug}
                    sx={{
                      py: {
                        xs: `5px`,
                        lg: `6px`,
                      },
                    }}
                  >
                    <SeoLink
                      link={item.slug}
                      isExternal={item.isExternal}
                      rel={item.isExternal ? `nofollow` : `internal`}
                      target={item.isExternal ? `_blank` : `self`}
                    >
                      <Typography
                        color={isDark ? `white` : `grey.600`}
                        fontWeight={300}
                        sx={{
                          fontSize: `12px`,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </SeoLink>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </CustomStack>

        <Stack marginTop="24px" alignItems="flex-end" width="100%">
          <Typography
            color="grey.600"
            fontWeight={300}
            sx={{
              fontSize: `10px`,
            }}
          >
            <a
              href="https://www.iubenda.com/privacy-policy/12511737"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Leggi la privacy policy
            </a>
          </Typography>
        </Stack>
      </ResponsiveContainer>
    </OldBox>
  )
}
