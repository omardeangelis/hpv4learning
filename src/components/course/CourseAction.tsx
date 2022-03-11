import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "gatsby";
import React from "react";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

type Props = {
  pageLink: string;
  buyLink?: string | false;
  isFreeCourse?: boolean;
};

const CourseAction = ({ pageLink, buyLink, isFreeCourse }: Props) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleJustify = React.useCallback(() => {
    if (!buyLink || isFreeCourse) {
      return "flex-start";
    }
    return "space-between";
  }, [buyLink]);

  return (
    <Box>
      <Stack
        justifyContent={handleJustify()}
        alignItems='center'
        direction='row'
      >
        {buyLink && !isFreeCourse && (
          <a href={buyLink} rel='nofollow' style={{ textDecoration: "none" }}>
            <Button
              variant='contained'
              color='primary'
              size={sm ? "small" : "medium"}
            >
              Acquista
            </Button>
          </a>
        )}

        <Link to={`/${pageLink}/`} style={{ textDecoration: "none" }}>
          <Button
            variant={!buyLink && !isFreeCourse ? "contained" : "outlined"}
            color='primary'
            size={sm ? "small" : "medium"}
            endIcon={<ArrowRightAltSharpIcon />}
          >
            Vedi
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default CourseAction;
