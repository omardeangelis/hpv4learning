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
    gap={[`16px`, `24px`]}
  >
    <Typography
      fontWeight={500}
      fontSize={[`16px`, `21px`]}
      lineHeight={[`24px`, `31px`]}
      textTransform="uppercase"
    >
      {domanda && domanda}
    </Typography>
    <Typography
      fontWeight={600}
      fontSize={[`24px`, `39px`]}
      lineHeight={[`34px`, `54px`]}
      textAlign="center"
    >
      {rispostaPrincipale && rispostaPrincipale}
    </Typography>
    <Typography
      fontWeight={400}
      fontSize={[`18px`, `21px`]}
      lineHeight={[`24px`, `29px`]}
      textAlign="center"
    >
      {rispostaAggiuntiva && rispostaAggiuntiva}
    </Typography>
  </Stack>
)
