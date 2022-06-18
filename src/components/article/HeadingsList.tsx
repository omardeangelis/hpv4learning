import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { isEmpty } from "lodash";

type Props = {
  title?: string;
  list?: (string | null | undefined)[];
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
                <a
                  href={`#${index}`}
                  title={el || "Heading di " + title}
                  style={{
                    textDecoration: "underline",
                  }}
                >
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
                </a>
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </>
  );
};

export default HeadingsList;
