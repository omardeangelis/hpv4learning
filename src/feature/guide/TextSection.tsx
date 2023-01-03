import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"

type Props = {
  domanda: string | null
  rispostaPrincipale: string | null
  rispostaAggiuntiva: string | null
}

const StyledStack = styled(Stack)`
  & p {
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1024px) {
    & p {
      margin-bottom: 24px;
    }
  }
`

export const TextSection = ({
  domanda,
  rispostaPrincipale,
  rispostaAggiuntiva,
}: Props) => (
  <StyledStack
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    maxWidth="756px"
  >
    <Typography
      fontWeight={500}
      fontSize={{ xs: `16px`, lg: `21px` }}
      lineHeight={{ xs: `24px`, lg: `31px` }}
      textTransform="uppercase"
    >
      {domanda && domanda}
    </Typography>
    <Typography
      fontWeight={600}
      fontSize={{ xs: `24px`, lg: `39px` }}
      lineHeight={{ xs: `34px`, lg: `54px` }}
      textAlign="center"
    >
      {rispostaPrincipale && rispostaPrincipale}
    </Typography>
    <Typography
      fontWeight={400}
      fontSize={{ xs: `18px`, lg: `21px` }}
      lineHeight={{ xs: `24px`, lg: `29px` }}
      textAlign="center"
    >
      {rispostaAggiuntiva && rispostaAggiuntiva}
    </Typography>
  </StyledStack>
)
