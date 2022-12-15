import React from "react"
// Material UI
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

type Props = {
  title: string
  list: string[]
  icon: React.ReactElement
}

const ListSection = ({ title, list, icon }: Props) => (
  <>
    <Typography
      fontWeight={600}
      sx={{
        fontSize: { xs: `24px`, lg: `36px` },
      }}
    >
      {title}
    </Typography>

    <List dense>
      {list.map((el) => (
        <ListItem
          key={el}
          style={{
            paddingLeft: `0px`,
          }}
        >
          <ListItemIcon
            sx={{
              mr: { xs: `6px`, lg: `8px` },
              minWidth: `unset`,
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText>
            <Typography
              color="grey.500"
              sx={{
                fontSize: { xs: `14px`, lg: `18px` },
              }}
            >
              {el}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </>
)

export default ListSection
