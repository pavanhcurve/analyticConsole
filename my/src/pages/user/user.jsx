import DataTable from "../../components/dataTable/DataTable";
import "./user.css"

const User = () => {

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable />
        </div>
    )
};
export default User