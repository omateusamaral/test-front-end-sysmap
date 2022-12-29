import { Grid, Typography } from "@mui/material";
import { Table } from "../common/Table";

export function Posts() {
  return (
    <Grid container>
      <Grid item xs={12} m={2}>
        <Typography variant="h5" fontWeight="bold">
          Posts
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Table rows={[]} columns={[]} setSelectedIds={() => []} />
      </Grid>
    </Grid>
  );
}
