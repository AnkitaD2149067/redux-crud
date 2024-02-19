import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/UserReducer";

const UpdateUser = () => {
  const { id } = useParams(); // To get the Id (fetched as string) of the user in the url and updateuser page 
  const users = useSelector((state) => state.users); //To get all the users
  const existingUser = users.filter(f => f.id == id);
  // console.log(typeof id) ;  then it is string
  const { name, email, domain } = existingUser[0];
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newDomain, setNewDomain] = useState(domain);
  // console.log(name)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: newName,
      email: newEmail,
      domain: newDomain
    }))
    alert("User Info has been updated")
    navigate("/");
  }


  return (
    <div className="d-flex w-100 vh-100  justify-content-center align-items-center">
      <div className="w-50 border bg-light p-3">
        <h4 className="text-center my-3 text-info">Edit User Information</h4>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text"
              className="form-control my-2"
              name="name"
              placeholder="Enter your name"
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input type="email"
              className="form-control my-2"
              name="email"
              placeholder="Enter your email address"
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="domain">Domain</label>
            <input type="text"
              className="form-control my-2"
              name="domain"
              placeholder="Enter your Domain"
              value={newDomain}
              onChange={e => setNewDomain(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning m-2">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;