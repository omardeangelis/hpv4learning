import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const LevelChip = ({ type }: { type: "free" | "udemy" }) => {
  const getBgColor = React.useCallback(() => {
    switch (type) {
      case "free":
        return "green.300";
      case "udemy":
        return "purple.500";
      default:
        "blue.400";
    }
  }, [type]);

  return (
    <Box
      sx={{
        backgroundColor: getBgColor(),
        p: "0px 8px",
        position: "absolute",
        height: { xs: "14px", lg: "20px" },
        top: { xs: "6px", lg: "16px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: { xs: "6px", lg: "13px" },
        borderRadius: "100px",
        zIndex: 2,
      }}
    >
      <Stack
        direction='row'
        justifyContent='flex-start'
        spacing='6px'
        alignItems='center'
      >
        <Box
          sx={{
            width: { xs: "6px", lg: "8px" },
            height: { xs: "6px", lg: "8px" },
            borderRadius: "50%",
            background: "white",
          }}
        />
        <Typography
          sx={{
            textTransform: "lowercase",
            color: "white",
            fontSize: { xs: "8px", lg: "10px" },
          }}
        >
          {type}
        </Typography>
      </Stack>
    </Box>
  );
};

export default LevelChip;
