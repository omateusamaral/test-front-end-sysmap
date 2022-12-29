import { Grid, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { User } from "../api";
import { Table } from "./Table";

interface UsersProps {
  data: User[] | undefined;
  loading: boolean;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}
const columns: GridColDef<User>[] = [
  { field: "id", headerName: "ID", flex: 1, hide: true },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "username", headerName: "Last Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  {
    field: "website",
    headerName: "Website",
    flex: 1,
  },
];
export function Users({ data, loading, setSelectedIds }: UsersProps) {
  return (
    <Grid container>
      <Grid item xs={12} m={2}>
        <Typography variant="h5" fontWeight="bold">
          Users
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Table
          rows={data ?? []}
          columns={columns}
          loading={loading}
          setSelectedIds={setSelectedIds}
        />
      </Grid>
    </Grid>
  );
}
