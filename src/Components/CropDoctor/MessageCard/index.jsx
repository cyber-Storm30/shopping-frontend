import React from "react";

const MessageCard = ({ data }) => {
  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: data.status === "1" ? "whitesmoke" : "wheat",
        borderWidth: 1,
        borderColor: data.status === "1" ? "black" : "none",
        width: 350,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      {data.message}
    </div>
  );
};

export default MessageCard;
