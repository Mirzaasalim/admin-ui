import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Salim", firstName: "Mirza", age: 22 },
  { id: 2, lastName: "Azmi", firstName: "Izzal", age: 42 },
  { id: 3, lastName: "Rizky", firstName: "Fathu", age: 45 },
  { id: 4, lastName: "Gunanto", firstName: "Dani", age: 16 },
  { id: 5, lastName: "Safitro", firstName: "Ilham", age: 25 },
  { id: 6, lastName: "Ramadhan", firstName: "Jofar", age: 44 },
  { id: 7, lastName: "Al-fatir", firstName: "Dimas", age: 100 },
  { id: 8, lastName: "Priyo", firstName: "Alvin", age: 36 },
  { id: 9, lastName: "Arya", firstName: "Kevin", age: 52 },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
