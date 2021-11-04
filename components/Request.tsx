import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import { PullRequest } from "../types";

import { withStyles } from "@mui/styles";

const styles = () => ({
  marginAuto: {
    margin: "auto",
  },
});

const Request = (props: any) => {
  const { classes, pr }: { classes: any; pr: PullRequest } = props;
  const { title, labels, updated_at, html_url } = pr;
  return (
    <Card data-testid="pull-request-card">
      <Grid
        container
        spacing={2}
        direction="column"
        className={classes.marginAuto}
      >
        <Grid
          container
          item
          spacing={3}
          xs={6}
          direction="row"
          className={classes.marginAuto}
        >
          <Grid item xs={5}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">{updated_at}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Link href={html_url}>{html_url}</Link>
          </Grid>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          spacing={2}
          xs={6}
          className={classes.marginAuto}
        >
          {labels.map(({ id, name, color }) => (
            <Grid xs={2} container item key={id} justifyContent="flex-start">
              <CodeIcon sx={{ backgroundColor: `#${color}`, color: "white" }} />
              <Typography>{name}</Typography>
            </Grid>
          ))}
          <Grid item xs />
        </Grid>
      </Grid>
    </Card>
  );
};

export default withStyles(styles)(Request);
