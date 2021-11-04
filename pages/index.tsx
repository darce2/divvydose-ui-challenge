import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import { Request, Selector } from "../components";
import { Label, PullRequest } from "../types";

const styles = (theme: any) => ({
  // Load app bar information from the theme
  toolbar: {
    ...theme.mixins.toolbar,
    margin: "auto",
  },
  spacing: {
    "margin-top": "auto",
  },
});

const Home: NextPage = (props: any) => {
  const {
    classes,
    labels = [],
    prs = [],
  }: { classes: any; labels: Label[]; prs: PullRequest[] } = props;
  const [selectedLabels, setSelectedLabels] = React.useState<string[]>([]);

  const handleSelections = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedLabels(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //naive approach double filter
  const selectedPRs = prs.filter((pr: PullRequest) => {
    if (selectedLabels.length < 1) return true;
    else {
      return pr.labels.some((label: Label) =>
        selectedLabels.includes(label.name)
      );
    }
  });

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Open Pull Requests
        </Typography>
      </AppBar>
      <Grid
        container
        maxWidth="lg"
        alignItems="center"
        direction="column"
        className={classes.toolbar}
      >
        <Grid container item justifyContent="flex-start">
          <Selector
            selectedLabels={selectedLabels}
            handleSelections={handleSelections}
            labels={labels}
          />
        </Grid>
        <Grid container item>
          <Grid
            container
            item
            direction="column"
            className={classes.spacing}
          >
            {selectedPRs.map((pr) => (
              <Request key={pr.id} pr={pr} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  const pullReq = fetch(
    "https://api.github.com/repos/divvydose/ui-coding-challenge/pulls"
  );
  const labelReq = fetch(
    "https://api.github.com/repos/divvydose/ui-coding-challenge/labels"
  );

  const [pullRes, labelRes] = await Promise.all([pullReq, labelReq]);
  const [prs, labels] = await Promise.all([pullRes.json(), labelRes.json()]);

  // Pass data to the page via props
  return { props: { prs, labels } };
};

export default withStyles(styles)(Home);
