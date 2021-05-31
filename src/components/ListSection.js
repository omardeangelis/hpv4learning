import React from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useGlobalContext } from "../context";
const ListSection = ({ title, titleUnderline, list, icon, className }) => {
  const { mediaQuery } = useGlobalContext();
  return (
    <>
      <Typography variant={mediaQuery.md ? "h6" : "h5"} className={className}>
        {title}{" "}
        <strong color='primary' variant='h4'>
          {titleUnderline}
        </strong>
      </Typography>

      <List>
        {list.map((el) => {
          return (
            <ListItem
              key={el}
              style={{
                paddingLeft: "0px",
              }}
            >
              <ListItemIcon size={mediaQuery.md ? "small" : "medium"}>
                {icon}
              </ListItemIcon>
              <ListItemText variant={mediaQuery.md ? "body2" : "bdoy1"}>
                {el}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListSection;
