import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/UserReducer";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const dispatch = useDispatch();  
  // To dispatch the actions to the store
  const users = useSelector((state) => state.users); 
  //To access the store which contains the state of the users
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({
      id: users[users.length - 1].id + 1, name, email, domain
    }))
    alert("New User has been added");
    navigate("/");
  }
  return (
    <div className="d-flex w-100 vh-100  justify-content-center align-items-center">
      <div className="w-50 border bg-light p-3">
        <h4 className="text-center my-3 text-primary">Add a New User</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text"
              className="form-control my-2"
              name="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input type="email"
              className="form-control my-2"
              name="email"
              placeholder="Enter your email address"
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="domain">Domain</label>
            <input type="text"
              className="form-control my-2"
              name="domain"
              placeholder="Enter your Domain"
              onChange={e => setDomain(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success m-2">Add</button>
          <Link to='/' className="text-black m-3">Back</Link>
        </form>
      </div>
    </div>
  )
}

export default CreateUser;