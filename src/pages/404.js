import * as React from "react";
import { Link } from "gatsby";
//Global Component
import Layout from "../components/layout";
//Material Ui
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
  },
}));
// markup
const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box className={classes.root}>
          <Typography variant='h2' align='center'>
            Pagina non trovata
          </Typography>
          <Box className={classes.btnContainer}>
            <Button
              component={Link}
              to='/'
              variant='contained'
              size='large'
              color='primary'
            >
              Vai alla Home
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
