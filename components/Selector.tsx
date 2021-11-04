import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import { Label } from "../types";

const styles = () => ({
  marginAuto: {
    margin: "auto",
  },
});

const Selector = (props: any) => {
  const {
    classes,
    selectedLabels,
    handleSelections,
    labels,
  }: {
    classes: any;
    selectedLabels: string[];
    handleSelections: (event: any) => void;
    labels: Label[];
  } = props;

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
      <Select
        labelId="tag-select-label"
        id="tag-select"
        multiple
        value={selectedLabels}
        onChange={handleSelections}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {labels?.map(({ id, name, description }) => (
          <MenuItem key={id} value={name} data-testid="tag-select-option">
            <Grid container spacing={0}>
              <Grid item xs={2} className={classes.marginAuto}>
                <Checkbox checked={selectedLabels.indexOf(name) > -1} />
              </Grid>
              <Grid item xs={4} className={classes.marginAuto}>
                <ListItemText primary={name} />
              </Grid>
              <Grid item xs={6} className={classes.marginAuto}>
                <ListItemText secondary={description} />
              </Grid>
            </Grid>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withStyles(styles)(Selector);
