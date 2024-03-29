import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { triggerGACustomEvent } from "../../utils/tracking"
import SeoLink from "../shared/SeoLink"

const StyledBox = styled(Box)`
  position: fixed;
  bottom: -1px;
  left: 0;
  right: 0;
  padding: 0px 16px 8px;
  background: white;
  z-index: 99999999;
  margin: auto;
  width: 100%;
  border: 1px solid;
  border-color: var(--purple-200);

  .no-mobile {
    display: none;
  }

  .action-box {
    display: flex;
    align-items: flex-end;
    & > *:not(:first-of-type) {
      margin-left: 16px;
    }
  }

  @media screen and (min-width: 1024px) {
    border-radius: 8px;
    padding: 24px 16px;
    position: static;
    .point {
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background-color: var(--green-300);
    }

    .no-mobile {
      display: inherit;
    }

    .action-box {
      display: block;
      & > *:not(:first-of-type) {
        margin-left: 0px;
      }
    }

    .sales {
      height: 38px;
      width: 38px;
      display: flex;
      background: var(--purple-400);
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`

const CourseCoupon = ({
  prezzo,
  link,
  isDisabled,
}: {
  prezzo: number
  link?: string
  isDisabled?: boolean
}) => (
  <StyledBox
    width="100%"
    sx={{
      mt: { xs: `0px`, lg: `24px` },
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        display: { xs: `none`, lg: `flex` },
      }}
    >
      <Typography
        color="grey.700"
        fontWeight={500}
        sx={{
          fontSize: `14px`,
        }}
      >
        coupon
      </Typography>
      <Box color="green.300">
        <Stack direction="row" alignItems="center" spacing={1}>
          <div className="point" />
          {` `}
          <Typography
            fontWeight={500}
            sx={{
              color: `inherit`,
              fontSize: `14px`,
            }}
          >
            attivo
          </Typography>
        </Stack>
      </Box>
    </Stack>
    <Box mt="12px">
      <Box className="action-box">
        <Stack
          justifyContent="space-between"
          sx={{
            flexDirection: {
              xs: `column-reverse`,
              lg: `row`,
            },
            alignItems: {
              xs: `flex-end`,
              lg: `center`,
            },
          }}
        >
          <Typography
            color="grey.600"
            fontWeight={300}
            sx={{
              fontSize: { xs: `14px`, lg: `14px` },
              textDecoration: `line-through`,
            }}
          >
            {`${(prezzo / 100).toFixed(2)}€`}
          </Typography>
          <Box className="sales no-mobile">
            <Typography
              color="white"
              fontWeight={600}
              sx={{
                fontSize: `10px`,
              }}
            >
              {`-${Math.ceil(100 - (12.99 * 100) / (prezzo / 100)).toFixed(
                0
              )}%`}
            </Typography>
          </Box>
          <Typography
            color="grey.800"
            fontWeight={400}
            sx={{
              fontSize: `18px`,
            }}
          >
            12,99€
          </Typography>
        </Stack>
        <Box
          mt="16px"
          sx={{
            flexGrow: 1,
          }}
        >
          {!isDisabled ? (
            <SeoLink link={link as string} isExternal rel="nofollow">
              <Button
                variant="contained"
                color={`primary`}
                size="large"
                disabled={isDisabled}
                sx={{
                  borderRadius: `100px`,
                  width: `100%`,
                }}
                onClick={triggerGACustomEvent(
                  { event: `click_to_udemy` },
                  { hasLocation: true }
                )}
              >
                {isDisabled ? `Esaurito` : `Riscatta Coupon`}
              </Button>
            </SeoLink>
          ) : (
            <Button
              variant="contained"
              color={`primary`}
              size="large"
              disabled={isDisabled}
              sx={{
                borderRadius: `100px`,
                width: `100%`,
              }}
            >
              {isDisabled ? `Esaurito` : `Riscatta Coupon`}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  </StyledBox>
)

export default CourseCoupon
