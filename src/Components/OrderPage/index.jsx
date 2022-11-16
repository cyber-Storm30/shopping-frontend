import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosClient } from "../../Services/apiClient";
import { pixToVw } from "../../Utils/pixToRem";
import OrderItem from "./OrderItem";
import OrderWrapper from "./OrderWrapper";

const OrderPage = () => {
  const user = useSelector((s) => s.auth.user);
  const [orderItems, setOrdetItems] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const res = await axiosClient.get(
        `http://localhost:5000/api/order/find/${user._id}`
      );
      //   console.log(res);
      setOrdetItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: pixToVw(100),
      }}
    >
      <h1 style={{ marginLeft: 10 }}>Your Orders</h1>
      <div
        className={{
          display: "flex",
          paddingLeft: pixToVw(100),
          flexDirection: "column",
          gap: pixToVw(50),
        }}
      >
        {orderItems?.map((item, id) => (
          <div
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "lightgray",
              marginBottom: 100,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <OrderWrapper item={item} key={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
