import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { isEmpty } from "lodash";

type Props = {
  title?: string;
  list?: (string | null | undefined)[];
};

export const StyledTypography = styled(Typography)`
  font-size: 14px;
  text-decoration: underline;

  @media screen and (min-width: 1024px) {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const HeadingsList = ({ title, list }: Props) => {
  return (
    <>
      <Typography
        fontWeight={500}
        sx={{
          fontSize: "20px",
          padding: "20px 16px",
          paddingBottom: "0",
        }}
      >
        {title}
      </Typography>
      {list && !isEmpty(list) ? (
        <List dense>
          {list.map((el, index) => {
            return (
              <ListItem
                key={el}
                style={{
                  paddingLeft: "16px",
                }}
              >
                {" "}
                <a href={`#${index}`} title={el || "Heading di " + title}>
                  <ListItemText>
                    <StyledTypography color='#000' fontWeight={400}>
                      {el}
                    </StyledTypography>
                  </ListItemText>
                </a>
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </>
  );
};
