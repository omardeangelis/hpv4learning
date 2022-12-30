import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

type Props = {
  domanda: string | null
  rispostaPrincipale: string | null
  rispostaAggiuntiva: string | null
}

export const TextSection = ({
  domanda,
  rispostaPrincipale,
  rispostaAggiuntiva,
}: Props) => (
  <Stack
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    maxWidth="756px"
    gap={{ xs: `16px`, lg: `24px` }}
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
  </Stack>
)
