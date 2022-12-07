import React from "react";

const DataCard = ({ month, title, values, index }) => {
  return (
    <div style={{ width: "100vw", marginBottom: "30px" }}>
      {index === 0 && (
        <div
          style={{ fontSize: "32px", fontWeight: "500", marginBottom: "20px" }}
        >
          {month}
        </div>
      )}
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 60, fontSize: "28px", width: "170px" }}>
          {title}:-
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 50 }}>
          {/* <p style={{ fontSize: "28px" }}>Tomato</p>
          <p style={{ fontSize: "28px" }}>Potato</p>
          <p style={{ fontSize: "28px" }}>Brinjal</p>
          <p style={{ fontSize: "28px" }}>Cabbage</p>
          <p style={{ fontSize: "28px" }}>Carrot</p>
          <p style={{ fontSize: "28px" }}>Onion</p> */}
          {values.map((data, idx) => (
            <p
              style={{
                fontSize: "28px",
                width: "120px",
                display: "flex",
                justifyContent: "center",
                // backgroundColor: "red",
              }}
              key={idx}
            >
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataCard;
