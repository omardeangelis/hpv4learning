import Box from "@mui/system/Box"
import { css } from "@mui/system"
import styled from "@emotion/styled"

export const CourseAlignment = styled(Box)(
  css({
    display: [`block`, `flex`],
    position: `relative`,
    marginLeft: `auto`,
    marginRight: `auto`,
  })
)

export const CourseSection = styled(Box)(
  css({
    padding: `0px 0px`,
    maxWidth: [`unset`, `887px`],
  })
)

type StyledProps = {
  full: boolean
}

export const ReviewSection = styled(Box)(
  css({
    display: `flex`,
    flexDirection: `column`,
    "& >*:not(:first-of-type)": {
      marginLeft: `0px`,
      marginTop: `24px`,
    },
    "@media screen and (min-width:767px)": {
      flexDirection: `row`,
      "& >*:not(:first-of-type)": {
        marginLeft: `24px`,
        marginTop: `0px`,
      },
    },
  })
)

export const CustomStack = styled(Box)<StyledProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
  & > *:not(:last-of-type) {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 767px) {
    & > *:not(:last-of-type) {
      margin-bottom: 0px;
      margin-right: ${(props) => (props.full ? `unset` : `61px`)};
    }
    flex-direction: row;
    justify-content: ${(props) =>
      props.full ? `space-between` : `flex-start`};
  }
`
