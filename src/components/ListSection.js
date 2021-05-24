import React from "react";
//Material UI
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const ListSection = ({ title, titleUnderline, list, icon, className }) => {
  return (
    <>
      <Typography variant='h5' className={className}>
        {title}{" "}
        <strong color='primary' variant='h4'>
          {titleUnderline}
        </strong>
      </Typography>

      <List>
        {list.map((el) => {
          return (
            <ListItem key={el}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{el}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ListSection;
