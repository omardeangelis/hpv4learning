import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Box from "@mui/system/Box"
import { Link } from "gatsby"
import React from "react"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"
import { navigate } from "@reach/router"
import { triggerGACustomEvent } from "../../utils/tracking"

type Props = {
  pageLink: string
  buyLink?: string | false
  isFreeCourse?: boolean
}

const CourseAction = ({ pageLink, buyLink, isFreeCourse }: Props) => {
  const handleJustify = React.useMemo(() => {
    if (!buyLink || isFreeCourse) {
      return `flex-start`
    }
    return `space-between`
  }, [buyLink, isFreeCourse])

  const handleBuyLink = React.useCallback(() => {
    if (!buyLink) return
    triggerGACustomEvent({
      event: `click_to_udemy`,
    })()
    navigate(buyLink)
  }, [buyLink])

  return (
    <Box>
      <Stack
        justifyContent={handleJustify}
        alignItems="center"
        direction="row"
        flexWrap="wrap"
      >
        {buyLink && !isFreeCourse && (
          <Button
            variant="contained"
            color="primary"
            size={`medium`}
            onClick={handleBuyLink}
          >
            Acquista
          </Button>
        )}

        <Link to={`/${pageLink}/`} style={{ textDecoration: `none` }}>
          <Button
            variant={!buyLink && !isFreeCourse ? `contained` : `outlined`}
            color="primary"
            size={`medium`}
            endIcon={<ArrowRightAltSharpIcon />}
          >
            Vedi
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

export default CourseAction
