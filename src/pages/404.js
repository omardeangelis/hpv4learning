import * as React from "react"
import { Link } from "gatsby"
// Global Component
// Material Ui
import makeStyles from "@mui/styles/makeStyles"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Layout from "../components/shared/layout"

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
  },
  btnContainer: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    marginTop: `5rem`,
  },
}))
// markup
const NotFoundPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box className={classes.root}>
          <Typography variant="h2" align="center">
            Pagina non trovata
          </Typography>
          <Box className={classes.btnContainer}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              color="primary"
            >
              Vai alla Home
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
