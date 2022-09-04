import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { createStarReview } from "../../utils/general";
import { BorderBox } from "../layout";

type Props = {
  title: string;
  description: string;
  star?: number;
  image?: React.ReactElement;
};

export const ReviewBox = ({ image, title, description, star }: Props) => {
  return (
    <BorderBox
      borderRadius='16px'
      sx={{
        maxWidth: { xs: "unset", lg: "346px" },
        width: "100%",
      }}
    >
      <Box sx={{ p: { xs: "16px", lg: "24px" } }}>
        <Stack spacing='14px' alignItems='flex-start' flexDirection='column'>
          <Box display='flex' alignItems='center'>
            {image ? (
              <Avatar
                variant='circular'
                sx={{
                  width: "56px",
                  height: "56px",
                }}
              >
                {image}
              </Avatar>
            ) : null}
            <Box ml='12px'>
              <Stack spacing='4px' flexDirection='column'>
                <Typography
                  component='p'
                  fontWeight={600}
                  fontSize='18px'
                  lineHeight='20px'
                >
                  {title}
                </Typography>
                {star ? (
                  <Box
                    display='flex'
                    alignItems='center'
                    sx={{
                      "& >*:not(:last-of-type)": {
                        mr: "2px",
                      },
                    }}
                  >
                    {createStarReview(star, "18px")}
                  </Box>
                ) : null}
              </Stack>
            </Box>
          </Box>
          <Typography
            component='p'
            color='grey.600'
            fontSize='16px'
            lineHeight='20px'
          >
            {description}
          </Typography>
        </Stack>
      </Box>
    </BorderBox>
  );
};
