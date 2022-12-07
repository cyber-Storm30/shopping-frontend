import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DoctorCard = ({ data }) => {
  return (
    <div
      style={{
        width: 370,
        backgroundColor: "#E5E4E2",
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        paddingLeft: 10,
        cursor: "pointer",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <AccountCircleIcon fontSize="large" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone Number: {data.phonenumber}</p>
        <div style={{ display: "flex", gap: 5 }}>
          Available in:
          {data.language.map((lang, idx) => (
            <p key={idx}>{lang}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
