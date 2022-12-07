import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import { axiosClient } from "../../../Services/apiClient";
import MessageCard from "../MessageCard";

const Query = () => {
  const [messages, setMessages] = useState([]);
  const [singleMessage, setSingleMessage] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axiosClient.get("/doctor/message/get/all");
      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    const newMessage = {
      message: singleMessage,
      status: "2",
    };
    setMessages([...messages, newMessage]);
    setSingleMessage("");
    try {
      await axiosClient.post("/doctor/message", newMessage);
      setSingleMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ width: "75vw", height: "50vh" }}>
      <div
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "#F0F0F0",
          marginTop: 20,
          borderRadius: 10,
          position: "relative",
          paddingTop: 10,
          height: "70vh",
          overflowY: "scroll",
        }}
      >
        <div style={{ paddingBottom: 10 }}>
          {messages.map((data, idx) => (
            <MessageCard data={data} key={idx} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "97%",
          height: 55,
          gap: 10,
          borderRadius: 10,
          borderWidth: "2px",
          borderColor: "gray",
          // position: "absolute",
          // bottom: 10,
          marginLeft: 5,
          // backgroundColor: "red",
        }}
      >
        <input
          placeholder="Write you query here"
          onChange={(e) => {
            setSingleMessage(e.target.value);
          }}
          style={{
            width: "97%",
            height: 50,
            padding: 5,
            borderRadius: 10,
            outline: "none",
            borderWidth: 1,
            borderColor: "gray",
            border: "none",
            marginLeft: 5,
          }}
        />

        <SendIcon style={{ cursor: "pointer" }} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Query;
