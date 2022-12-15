import React from "react"
import CodeIcon from "@mui/icons-material/Code"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import BeenhereIcon from "@mui/icons-material/Beenhere"
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded"
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded"
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded"

export const getIcon = (type: string, size?: { xs: string; lg: string }) => {
  switch (type) {
    case `videomakers`:
      return (
        <VideoCallIcon
          fontSize={size ? `inherit` : `small`}
          sx={{
            color: `purple.400`,
            fontSize: size && size,
          }}
        />
      )
    case `sviluppatori-web`:
      return (
        <CodeIcon
          fontSize={size ? `inherit` : `small`}
          sx={{
            color: `purple.400`,
            fontSize: size && size,
          }}
        />
      )
    default:
      return (
        <BeenhereIcon
          fontSize={size ? `inherit` : `small`}
          sx={{
            color: `purple.400`,
            fontSize: size && size,
          }}
        />
      )
  }
}

export const createStarReview = (value: number, size?: string) =>
  Array.from({ length: 5 }, (_, index) => {
    const integer = index + 1
    const half = index + 0.5

    if (value >= integer) {
      return (
        <StarRateRoundedIcon
          key={`star-${index}`}
          sx={{
            color: `purple.400`,
            fontSize: size || `14px`,
          }}
        />
      )
    }
    if (Math.ceil(value) >= half) {
      return (
        <StarHalfRoundedIcon
          key={`star-${index}`}
          sx={{
            color: `purple.400`,
            fontSize: size || `14px`,
          }}
        />
      )
    }
    return (
      <StarOutlineRoundedIcon
        key={`star-${index}`}
        sx={{
          color: `purple.400`,
          fontSize: size || `14px`,
        }}
      />
    )
  })

// export const parseMail = React.useCallback((text: string) => {
//   const splittedMail = text.split("*mail*");
//   let array: JSX.Element[] = [];

//   splittedMail.forEach((p, index) => {
//     if (index != 0 && index % 2 != 0) {
//       array.push(
//         <a
//           href={`mailto:${p}`}
//           target='_blank'
//           className={"link-style link-hover"}
//           key={index}
//         >
//           {p}
//         </a>
//       );
//     } else {
//       array.push(<span>{p}</span>);
//     }
//   });
//   return array;
// }, []);
