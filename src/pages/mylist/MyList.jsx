import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import MyDatatable from "../../components/mydatatable/MyDatatable";

function MyList() {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <MyDatatable/>
      </div>
    </div>
  );
}

export default MyList;