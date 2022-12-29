import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TableProps {
  rows: unknown[];
  columns: GridColDef[];
}
export function Table({ rows, columns }: TableProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
