import logo from "./logo.svg";
import "./App.css";
import AddUserDetails from "./component/AddUserDetails";
import { Routes, Route } from "react-router-dom";
import AllUsers from "./component/AllUsers";
import Navbar from "./component/Navbar/Navbar";
import EditUser from "./component/EditUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllUsers />} />
        <Route exact path="/adduser" element={<AddUserDetails />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
