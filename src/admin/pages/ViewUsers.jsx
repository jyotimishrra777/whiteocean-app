import React, { useEffect, useState } from "react";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container py-4">
      <h4 className="mb-5 main-title text-primary">👥 View All Users</h4>

      {users.length === 0 ? (
        <p className="text-muted">No users found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered  align-middle shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>Sr. No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span
                      className={`px-3 py-1 text-white rounded ${
                        user.status === "active" ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewUsers;
