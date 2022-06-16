import React from "react";
//Material UI
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AnchorLink } from "gatsby-plugin-anchor-links";

type Props = {
  title: string;
  list: string[];
};

const HeadingsList = ({ title, list }: Props) => {
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

      <List dense>
        {list.map((el) => {
          return (
            <ListItem
              key={el}
              style={{
                paddingLeft: "16px",
              }}
            >
              <AnchorLink to={`./#`} title={el}>
                <ListItemText>
                  <Typography
                    color='#000'
                    fontWeight={400}
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {el}
                  </Typography>
                </ListItemText>
              </AnchorLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default HeadingsList;
