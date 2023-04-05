import React, { useState, useEffect } from "react";
import "./AddUserDetails.css";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../Service/api";
import { useParams } from "react-router-dom";
import { editUser } from "../Service/api";

const EditUser = () => {
  const intialState = {
    userfirstname: "",
    userlastname: "",
    usergender: "",
    usersemeseter: "",
    userhobby: "",
  };
  const navigate = useNavigate();
  const [form, setUser] = useState(intialState);
  const { userfirstname, userlastname, usergender, usersemeseter, userhobby } =
    form;
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    setUser({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const editUserDetails = async () => {
    await editUser(id, form);
    navigate("/");
  };

  //   -------

  //   const EditUser = () => {
  //     const [user, setUser] = useState(initialValue);
  //     const { firstname, lastname, address, birthdate } = user;
  //     const { id } = useParams();
  //     const classes = useStyles();
  //     let history = useHistory();

  //   useEffect(() => {
  //       loadUserDetails();
  //   }, []);

  //   const loadUserDetails = async() => {
  //       const response = await getUsers(id);
  //       setUser(response.data);
  //   }

  //   const editUserDetails = async() => {
  //       const response = await editUser(id, user);
  //       history.push('/all');
  //   }

  //     const onValueChange = (e) => {
  //         setUser({...user, [e.target.name]: e.target.value})
  //     }
  //   const handleChange = ()=>{
  //    history.push('/all');
  //   }

  return (
    <div>
      <form className="user_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="userfirstname">First Name</label>
          <input
            type="test"
            name="userfirstname"
            value={userfirstname}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label for="userlastname">Last Name</label>
          <input
            type="test"
            name="userlastname"
            value={userlastname}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
          />
        </div>

        <div className="form-group">
          <div class="form-check">
            <label class="form-check-label" for="usergender">
              Male
              <input
                class="form-check-input"
                onChange={handleChange}
                type="radio"
                name="usergender"
                id="exampleRadios2"
                value={usergender}
              />
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label" for="usergender">
              Female
              <input
                class="form-check-input"
                onChange={handleChange}
                type="radio"
                name="usergender"
                id="exampleRadios2"
                value={usergender}
              />
            </label>
          </div>
          {/* <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Option 3
            </label>
          </div> */}
        </div>
        <div className="form-group">
          <label for="usersemeseter">Semester</label>
          <input
            type="test"
            name="usersemeseter"
            value={usersemeseter}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Semester"
          />
        </div>
        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Hobby
          </label>
        </div> */}
        <div className="form-group">
          <label for="usersemeseter">Hobby</label>
          <input
            type="test"
            name="userhobby"
            value={userhobby}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Hobby"
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <button className="btn btn-primary" onClick={() => editUserDetails()}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
