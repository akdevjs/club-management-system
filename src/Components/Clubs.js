import React from "react";
import { FaEye } from "react-icons/fa";
import "../styles/clubs.css";
function Clubs() {
  const data = [
    {
      clubName: "Rotary Club of New York",
      districtName: "District 7230",
      regularMembers: "50",
      honoraryMembers: "5",
      attendance: "85%",
      phfExternal: "2",
      students: "10",
      fellowships: "4",
    },
    {
      clubName: "Rotary Club of Los Angeles",
      districtName: "District 5280",
      regularMembers: "40",
      honoraryMembers: "3",
      attendance: "75%",
      phfExternal: "1",
      students: "8",
      fellowships: "3",
    },
  ];
  return (
    <div className="members__main main">
      <div className="members__head">
        <h1>CLUBS</h1>
      </div>
      <table className="club_table">
        <thead>
          <tr>
            <th>Club Name</th>
            <th>District Name</th>
            <th>Regular Members</th>
            <th>Honorary Members</th>
            <th>Attendance</th>
            <th>PHF External</th>
            <th>Students</th>
            <th>Fellowships</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((club, index) => (
            <tr key={index}>
              <td>{club.clubName}</td>
              <td>{club.districtName}</td>
              <td>{club.regularMembers}</td>
              <td>{club.honoraryMembers}</td>
              <td>{club.attendance}</td>
              <td>{club.phfExternal}</td>
              <td>{club.students}</td>
              <td>{club.fellowships}</td>
              <td>
                <FaEye className="icon view" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clubs;
