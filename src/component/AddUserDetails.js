import React, { useState } from "react";
import "./AddUserDetails.css";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const AddUserDetails = () => {
  const intialState = {
    userfirstname: "",
    userlastname: "",
    usergender: "",
    usersemeseter: "",
    userhobby: "",
  };
  const navigate = useNavigate();
  const [form, setUser] = useState(intialState);
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
  const handleAdd = async () => {
    await addUser(form);
    navigate("/");
  };
  return (
    <div>
      <form className="user_form" onSubmit={handleSubmit}>
        <div className="form-group form_margin">
          <label for="userfirstname" className="label">
            First Name :
          </label>
          <input
            type="test"
            name="userfirstname"
            value={form.userfirstname}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group form_margin">
          <label for="userlastname" className="label">
            Last Name :
          </label>
          <input
            type="test"
            name="userlastname"
            value={form.userlastname}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
          />
        </div>

        <div className="form-group form_margin">
          <div class="form-check">
            <label class="form-check-label" for="usergender" className="label">
              Male
              <input
                class="form-check-input"
                onChange={handleChange}
                type="radio"
                name="usergender"
                id="exampleRadios2"
                value="male"
              />
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label" for="usergender" className="label">
              Female
              <input
                class="form-check-input"
                onChange={handleChange}
                type="radio"
                name="usergender"
                id="exampleRadios2"
                value="female"
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
        <div className="form-group form_margin">
          <label for="usersemeseter" className="label">
            Semester :
          </label>
          <input
            type="test"
            name="usersemeseter"
            value={form.usersemeseter}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Semester"
          />
        </div>

        <div className="form-group form_margin">
          <label for="usersemeseter" className="label">
            Hobby :
          </label>
          <input
            type="test"
            name="userhobby"
            value={form.userhobby}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Hobby"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleAdd}
          style={{ margin: "10px" }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserDetails;
