import React from "react"
import Box from "@mui/material/Box"
import Skeleton from "@mui/material/Skeleton"

export const SkeletonDate = () => {
  const skeletonSlots = React.useMemo(() => Array.from({ length: 3 }), [])

  return (
    <>
      {skeletonSlots.map((_, index) => (
        <Box key={index} maxWidth={[`84px`, `115px`]} width="100%">
          <Skeleton sx={{ height: `18px`, width: `40px` }} variant="text" />
          <Skeleton
            variant="rectangular"
            sx={{
              height: { xs: `40px`, lg: `45px` },
              width: { xs: `84px`, lg: `115px` },
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              mt: `8px`,
              height: { xs: `40px`, lg: `45px` },
              width: { xs: `84px`, lg: `115px` },
            }}
          />
        </Box>
      ))}
    </>
  )
}
