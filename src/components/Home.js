import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  }
  return (
    <div className="container mt-4">
      <h2>CRUD App with React - Redux</h2>
      <div>
      <Link to='/addUser' className="btn btn-success my-3 adduserbtn">Add User</Link>
      </div>

      {users.length > 0 ?
        <table className="table table-bordered table-light table-hover text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Domain</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) =>
              <tr key={id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.domain}</td>
                <td>
                  <Link to={`/editUser/${user.id}`} className="btn btn-info m-2">Edit</Link>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        :
        null
      }
    </div>
  )
};

export default Home;