import React from "react";
import { FaEye, FaPencilAlt, FaFilePdf, FaTrash } from "react-icons/fa";
import "../styles/members.css";
function Members() {
  const data = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      membertype: "member",
      active: true,
      profileVisible: true,
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      membertype: "member",
      active: false,
      profileVisible: true,
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      membertype: "member",
      active: true,
      profileVisible: false,
    },
    {
      name: "Alice Lee",
      email: "alicelee@example.com",
      membertype: "member",
      active: false,
      profileVisible: false,
    },
    {
      name: "Tom Brown",
      email: "tombrown@example.com",
      membertype: "member",
      active: true,
      profileVisible: true,
    },
    {
      name: "Sara Davis",
      email: "saradavis@example.com",
      membertype: "member",
      active: true,
      profileVisible: true,
    },
    {
      name: "Mike Wilson",
      email: "mikewilson@example.com",
      membertype: "member",
      active: true,
      profileVisible: true,
    },
  ];
  return (
    <div className="members__main main">
      <div className="members__head">
        <h1>MEMBERS</h1>
        <div className="button">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>

            <span>ADD MEMBER</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Member Type</th>
            <th>Active</th>
            <th>Profile Visible</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((member) => (
            <tr key={member.email}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.membertype}</td>
              <td>
                {member.active ? (
                  <span className="icon">&#x1F44D;</span>
                ) : (
                  <span className="icon">&#x1F44E;</span>
                )}
              </td>
              <td>
                {member.profileVisible ? (
                  <span className="icon">&#x1F44D;</span>
                ) : (
                  <span className="icon">&#x1F44E;</span>
                )}
              </td>
              <td className="actions">
                <FaEye className="action-icon view" />
                <FaPencilAlt className="action-icon edit" />
                <FaFilePdf className="action-icon pdf" />
                <FaTrash className="action-icon delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Members;
