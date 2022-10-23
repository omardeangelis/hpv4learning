import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { cleanStringFromHtlmTags } from "../../utils/helpers";
import { BlockDescriptionProps } from "../../types";

const StyledBox = styled(Box)`
  .faq-title-box {
    border-bottom: 1px solid;
    border-bottom-color: var(--purple-200);
  }
  a {
    text-decoration: none;
    color: var(--pruple-400);
    &:hover {
      color: var(--pruple-500);
    }
  }

  .state-box:hover {
    cursor: pointer;
  }
`;

const SingleFaq = ({
  title,
  description,
  disableInject = false,
}: BlockDescriptionProps & { disableInject?: boolean }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <StyledBox>
      <Box className='faq-title-box' pb={["12px", "16px"]}>
        <Stack
          direction='row'
          alignItems='flex-start'
          justifyContent='space-between'
          onClick={() => setOpen(!open)}
          className='state-box'
        >
          <Typography
            sx={{
              lineHeight: { xs: "24px", lg: "29px" },
              fontSize: { xs: "18px", lg: "24px" },
            }}
            fontWeight={600}
            maxWidth='700px'
            component='h2'
          >
            {title}
          </Typography>
          <Box
            style={{
              transform: open ? "rotateZ( 180deg )" : "rotate(0)",
            }}
          >
            <ExpandMoreOutlined
              sx={{
                color: "grey.6",
                fontSize: "24px",
              }}
            />
          </Box>
        </Stack>
      </Box>
      {open && (
        <Box mt={["24px", "24px"]}>
          {disableInject ? (
            <Typography
              sx={{
                lineHeight: { xs: "22px", lg: "24px" },
                fontSize: { xs: "16px", lg: "18px" },
              }}
              fontWeight={300}
              color='grey.4'
              maxWidth='700px'
              component='p'
            >
              {cleanStringFromHtlmTags(description)}
            </Typography>
          ) : (
            <Typography
              sx={{
                lineHeight: { xs: "22px", lg: "24px" },
                fontSize: { xs: "16px", lg: "18px" },
              }}
              fontWeight={400}
              color='grey.5'
              maxWidth='700px'
              component='p'
              dangerouslySetInnerHTML={{
                __html: description.replace(
                  /(<p>&nbsp;<\/p>)|(<h2><span>&nbsp;<\/span><\/h2>)/g,
                  "",
                ),
              }}
            />
          )}
        </Box>
      )}
    </StyledBox>
  );
};

export default SingleFaq;
