import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import AutorenewIcon from "@material-ui/icons/Autorenew";
const info = [
  {
    titolo: "Crescita Personale",
    icon: <TrendingUpIcon />,
    text: "Dai un Boost ai tuoi progetti acquisendo competenze fondamentali per realizzare le tue idee",
  },
  {
    titolo: "Freelancer",
    icon: <WorkIcon />,
    text: "Acquisisci nuove competenze per ampliare la tua offerta ed entrare nel mercato che hai sempre desiderato",
  },
  {
    titolo: "Aziende e Team",
    icon: <BusinessIcon />,
    text: "Crea nuove posizioni lavorative all'interno della tua squadra ricoprendo nuove sfere di competenza o aggiornando le competenze della tua azienda",
  },
  {
    titolo: "Cambia Lavoro",
    icon: <AutorenewIcon />,
    text: "Reinventa la tua figura professionale e inizia la carriera lavorativa che hai sempre meritato",
  },
];

export default info;
