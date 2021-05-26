import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const info = [
  {
    titolo: "Crescita Personale",
    icon: <TrendingUpIcon />,
    text:
      "Dai un Boost a tutti i tuoi progetti, business idee personali grazie alle competenze fondamentali per competere al 100% sul mercato",
  },
  {
    titolo: "Freelancer",
    icon: <WorkIcon />,
    text:
      "Acquisisci nuove competenze per migliorare la tua offerta ed entrare nel mercato che hai sempre desiderato",
  },
  {
    titolo: "Aziende e Team",
    icon: <BusinessIcon />,
    text:
      "Crea nuove posizioni lavorative aggiungendo nuovi servizi e sfera di competenza all'interno della tua azienda",
  },
  {
    titolo: "Cambia Lavoro",
    icon: <AutorenewIcon />,
    text:
      "Reinventa la tua figura professionale e inizia la carriera lavorative che hai sempre meritato",
  },
];

export default info;
