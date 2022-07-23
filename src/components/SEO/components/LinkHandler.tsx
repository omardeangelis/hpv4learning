import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

type Props = {
  paginatedPath?: string;
};

const LinkHandler = ({ paginatedPath }: Props) => {
  const { href, hostname } = useLocation();

  const link = React.useMemo(
    () => (paginatedPath ? `${hostname}/${paginatedPath}/` : href),
    [href, hostname],
  );

  return (
    <Helmet>
      <link href={link} rel='alternate' hrefLang={'it-IT"'} key={"it"} />
      <link href={link} rel='canonical' key={"it-IT"} />
    </Helmet>
  );
};

export default LinkHandler;
