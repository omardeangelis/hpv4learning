import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { triggerGACustomEvent } from "../../utils/tracking";
import SeoLink from "../shared/SeoLink";

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
    border-radius: 24px;
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
      height: 34px;
      width: 34px;
      display: flex;
      background: var(--purple-400);
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
  }
`;

const CourseCoupon = ({
  prezzo,
  link,
  isDisabled,
}: {
  prezzo: number;
  link?: string;
  isDisabled?: boolean;
}) => {
  return (
    <StyledBox
      width='100%'
      sx={{
        mt: { xs: "0px", lg: "68px" },
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        sx={{
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Typography
          color='grey.700'
          fontWeight={500}
          sx={{
            fontSize: "14px",
          }}
        >
          coupon
        </Typography>
        <Box color='green.300'>
          <Stack direction='row' alignItems='center' spacing={1}>
            <div className='point'></div>{" "}
            <div
              style={{
                color: "inherit",
                fontSize: "10px",
              }}
            >
              attivo
            </div>
          </Stack>
        </Box>
      </Stack>
      <Box mt='12px'>
        <Box className='action-box'>
          <Stack
            justifyContent='space-between'
            sx={{
              flexDirection: {
                xs: "column-reverse",
                lg: "row",
              },
              alignItems: {
                xs: "flex-end",
                lg: "center",
              },
            }}
          >
            <Typography
              color='grey.600'
              fontWeight={300}
              sx={{
                fontSize: { xs: "14px", lg: "14px" },
                textDecoration: "line-through",
              }}
            >
              {`${(prezzo / 100).toFixed(2)}€`}
            </Typography>
            <Box className='sales no-mobile'>
              <Typography
                color='white'
                fontWeight={500}
                sx={{
                  fontSize: "10px",
                }}
              >
                {`-${Math.ceil(100 - (12.99 * 100) / (prezzo / 100)).toFixed(
                  0,
                )}%`}
              </Typography>
            </Box>
            <Typography
              color='grey.800'
              fontWeight={400}
              sx={{
                fontSize: "18px",
              }}
            >
              12,99€
            </Typography>
          </Stack>
          <Box
            mt='16px'
            sx={{
              flexGrow: 1,
            }}
          >
            {!isDisabled ? (
              <SeoLink link={link as string} isExternal rel='nofollow'>
                <Button
                  variant='contained'
                  color={"primary"}
                  size='large'
                  disabled={isDisabled}
                  sx={{
                    borderRadius: "100px",
                    width: "100%",
                  }}
                  onClick={triggerGACustomEvent(
                    { event: "clic_to_udemy" },
                    { hasLocation: true },
                  )}
                >
                  {isDisabled ? "Esaurito" : "Riscatta Coupon"}
                </Button>
              </SeoLink>
            ) : (
              <Button
                variant='contained'
                color={"primary"}
                size='large'
                disabled={isDisabled}
                sx={{
                  borderRadius: "100px",
                  width: "100%",
                }}
              >
                {isDisabled ? "Esaurito" : "Riscatta Coupon"}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default CourseCoupon;
