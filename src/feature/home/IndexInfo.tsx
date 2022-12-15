import React from "react"
import Container from "@mui/material/Container/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"
import Skeleton from "@mui/material/Skeleton"
import { BorderBox } from "../../components/layout"
import { useGetAllCourseStatsQuery } from "../../services/udemy"

const PureCssStack = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > *:not(:first-of-type) {
    margin-top: 16px;
  }
  @media screen and (min-width: 767px) {
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > * {
      margin-top: 0px;
      &:not(:first-of-type) {
        margin-top: 0px;
        margin-left: 48px;
      }
    }
  }
`

export const Info = ({
  title,
  subtitle,
  isLoading,
}: {
  title?: number
  subtitle: string
  isLoading?: boolean
}) => (
  <BorderBox
    sx={{
      maxWidth: {
        xs: `unset`,
        lg: `255px`,
      },
      height: {
        xs: `130px`,
        lg: `180px`,
      },
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      backgroundColor: `white`,
    }}
    width="100%"
    borderRadius="8px"
  >
    <Box>
      {isLoading ? (
        <Skeleton
          width="120px"
          sx={{
            height: { xs: `54px`, lg: `96px` },
            mx: `auto`,
          }}
        />
      ) : (
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: `39px`, lg: `64px` },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      )}

      <Typography
        textAlign="center"
        sx={{
          fontSize: { xs: `14px`, lg: `18px` },
          fontWeight: 400,
          maxWidth: {
            xs: `unset`,
            lg: `206px`,
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  </BorderBox>
)

// Sezione Informativa
export const IndexInfo = () => {
  const { isLoading, data } = useGetAllCourseStatsQuery()
  return (
    <Container>
      <Typography
        component={`h2`}
        textAlign="center"
        sx={{
          fontSize: { xs: `36px`, lg: `48px` },
          fontWeight: 600,
        }}
      >
        I nostri <span style={{ color: `white` }}> numeri </span>
      </Typography>
      <Box
        mx="auto"
        maxWidth="833px"
        sx={{
          mt: { xs: `24px`, lg: `35px` },
        }}
      >
        <PureCssStack>
          <Info
            title={data?.totalSubscribers}
            isLoading={isLoading}
            subtitle="Studenti Totali"
          />
          <Info
            title={data?.averageRating}
            isLoading={isLoading}
            subtitle="Voto Medio"
          />
          <Info
            title={data?.coursesHours}
            isLoading={isLoading}
            subtitle="Ore di Corsi"
          />
        </PureCssStack>
      </Box>
    </Container>
  )
}
