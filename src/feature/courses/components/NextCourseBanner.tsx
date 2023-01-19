import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"
import Box, { BoxProps } from "@mui/system/Box"
import React from "react"
import MoneyOffCsredSharpIcon from "@mui/icons-material/MoneyOffCsredSharp"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import StarIcon from "@mui/icons-material/Star"
import PersonIcon from "@mui/icons-material/Person"
import TimerIcon from "@mui/icons-material/Timer"
import CodeIcon from "@mui/icons-material/Code"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import {
  BannerWrapper,
  BannerBody,
  BannerAction,
  BannerActionIcon,
} from "./CourseBanner"
import { useCourseBannerContext } from "../context/CourseBanner"

const NextCourseBanner: React.FC<BoxProps> = ({ children, ...rest }) => {
  const { title, image } = useCourseBannerContext()

  const gatsbyImage = React.useMemo(
    () => (image ? getImage(image) : null),
    [image]
  )

  return (
    <BannerWrapper width="100%" {...rest}>
      <BannerBody>
        <Box
          maxWidth="64px"
          width="100%"
          sx={{
            borderRadius: `4px`,
            overflow: `hidden`,
            transform: `translateZ(0)`,
          }}
        >
          {gatsbyImage ? <GatsbyImage image={gatsbyImage} alt="text" /> : null}
        </Box>
        <Box ml="8px" width="100%">
          <Typography
            sx={{
              fontSize: `14px`,
              lineHeight: `18px`,
              fontWeight: 600,
            }}
          >
            Scopri il Prossimo corso
          </Typography>
          <Box mt="4px">
            <Typography
              sx={{
                fontSize: `12px`,
                lineHeight: `18px`,
              }}
            >
              {`${title?.slice(0, 32)}...`}
            </Typography>
          </Box>
        </Box>
      </BannerBody>
      <Divider
        sx={{
          my: `12px`,
        }}
      />
      {children}
    </BannerWrapper>
  )
}

export const FreeBannerCourse = () => {
  const { durata, category, slug } = useCourseBannerContext()

  const handleNavigate = React.useCallback(() => {
    navigate(`/${slug}/`)
  }, [slug])

  return (
    <NextCourseBanner>
      <BannerAction>
        <MoneyOffCsredSharpIcon
          sx={{
            color: `purple.400`,
          }}
          fontSize="small"
        />
        {durata ? (
          <BannerActionIcon
            icon={<TimerIcon fontSize="small" />}
            content={durata}
          />
        ) : null}
        {category ? (
          <BannerActionIcon
            icon={<CodeIcon fontSize="small" />}
            content={category}
          />
        ) : null}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleNavigate}
        >
          Inizia
        </Button>
      </BannerAction>
    </NextCourseBanner>
  )
}

export const PayableBannerCourse = () => {
  const { students, avgRating, slug } = useCourseBannerContext()
  const handleNavigate = React.useCallback(() => {
    navigate(`/${slug}/`)
  }, [slug])
  return (
    <NextCourseBanner>
      <BannerAction>
        <AttachMoneyIcon
          sx={{
            color: `purple.400`,
          }}
          fontSize="small"
        />
        {students ? (
          <BannerActionIcon
            icon={<PersonIcon fontSize="small" />}
            content={students}
          />
        ) : null}
        {avgRating ? (
          <BannerActionIcon
            icon={<StarIcon fontSize="small" />}
            content={avgRating}
          />
        ) : null}
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleNavigate}
        >
          Inizia
        </Button>
      </BannerAction>
    </NextCourseBanner>
  )
}
