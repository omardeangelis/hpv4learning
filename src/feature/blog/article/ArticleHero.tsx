import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/system/Box"
import { css } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import dayjs from "dayjs"

type Props = Partial<NonNullable<Queries.SingleArticleQuery["article"]>>

export const Styledtypography = styled(Typography)(
  css({
    color: `#6C757D`,
    fontSize: `14px`,
    lineHeight: `18px`,
    fontWeight: `300`,
  })
)

const StyledBox = styled(Box)(
  css({
    width: `100%`,
    padding: `15px`,
    borderLeft: `6px solid #1AC99F`,
    marginTop: [`25px`, `36px`],
    display: `flex`,

    alignItems: `center`,
    overflowX: `hidden`,
    borderRadius: `0px 8px 8px 0px`,
  })
)

export const ArticleHero: React.FC<Props> = ({
  body,
  meta_description,
  createdAt,
  titolo,
}) => {
  const day = React.useMemo(
    () => dayjs(createdAt).format(`DD/MM/YYYY`),
    [createdAt]
  )

  return (
    <section>
      <Box mx="auto" sx={{ marginTop: `10px` }}>
        <Typography
          component="h1"
          fontWeight={600}
          sx={{
            fontSize: { xs: `36px`, lg: `48px` },
            lineHeight: { xs: `44px`, lg: `56px` },
          }}
        >
          {titolo}
        </Typography>
      </Box>

      <Stack direction="row" spacing="20px" alignItems="center" mt="10px">
        <Styledtypography variant="caption">By Hpv4Learning</Styledtypography>
        {body?.childMarkdownRemark?.timeToRead ? (
          <Styledtypography
            variant="caption"
            sx={{
              display: `flex`,
              alignItems: `center`,
              gap: `7px`,
            }}
          >
            <AccessTimeIcon /> {body?.childMarkdownRemark?.timeToRead} min
          </Styledtypography>
        ) : null}
        {day ? (
          <Styledtypography variant="caption">{day}</Styledtypography>
        ) : null}
      </Stack>

      {meta_description ? (
        <StyledBox
          sx={{
            backgroundColor: `grey.100`,
          }}
        >
          <Typography textAlign="left">{`"${meta_description}"`}</Typography>
        </StyledBox>
      ) : null}
    </section>
  )
}
