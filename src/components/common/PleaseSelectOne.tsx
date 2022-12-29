import { Grid, Typography } from "@mui/material";

interface PleaseSelectOneProps {
  value?: string;
}
export function PleaseSelectOne({ value }: PleaseSelectOneProps) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1">
          {" "}
          Please select one {value ?? ""}
        </Typography>
      </Grid>
    </Grid>
  );
}
