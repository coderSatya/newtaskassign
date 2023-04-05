import React, { useEffect, useState } from "react";
import { getUsers } from "../Service/api";
import { Link } from "react-router-dom";
import { deleteUser } from "../Service/api";

const AllUsers = () => {
  const [userItems, setUserItems] = useState([]);
  const fetchUsers = async () => {
    const response = await getUsers();
    if (response.status === 200) {
      setUserItems(response.data);
      console.log(response.data, "ooo");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Semester</th>
            <th scope="col">Hobby</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userItems.map((userItem) => (
            <tr>
              <td>{userItem.id}</td>
              <td>{userItem.userfirstname}</td>
              <td>{userItem.userlastname}</td>
              <td>{userItem.usergender}</td>
              <td>{userItem.usersemeseter}</td>
              <td>{userItem.userhobby}</td>
              <td>
                {/* <EditCalendarIcon /> */}
                <Link to={`/edit/${userItem.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteUserData(userItem.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
