import { Grid, Tooltip, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Post } from "../../api";
import { Table } from "../common/Table";

interface PostTableProps {
  data: Post[] | undefined;
  loading: boolean;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}
const columns: GridColDef<Post>[] = [
  { field: "id", headerName: "Id", flex: 1, hide: true },
  { field: "userId", headerName: "User Id", width: 100 },
  { field: "title", headerName: "Title", width: 500 },
  {
    field: "body",
    headerName: "Post",
    flex: 1,
    renderCell: ({ row }) => (
      <Tooltip title={row.body}>
        <div>{row.body}</div>
      </Tooltip>
    ),
  },
];
export function PostTable({ data, loading, setSelectedIds }: PostTableProps) {
  return (
    <Grid container>
      <Grid item xs={12} m={2}>
        <Typography variant="h5" fontWeight="bold">
          Posts
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Table
          rows={data ?? []}
          columns={columns}
          setSelectedIds={setSelectedIds}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
}
