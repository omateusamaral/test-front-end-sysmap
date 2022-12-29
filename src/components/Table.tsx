import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface TableProps {
  rows: unknown[];
  columns: GridColDef<any>[];
  loading?: boolean;
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}
export function Table({ rows, columns, loading, setSelectedIds }: TableProps) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
        checkboxSelection
        loading={loading}
        disableColumnFilter
        disableColumnMenu
        onCellClick={(cell) => setSelectedIds([String(cell.id)])}
        onSelectionModelChange={(selectedId) =>
          setSelectedIds(selectedId as string[])
        }
      />
    </div>
  );
}
