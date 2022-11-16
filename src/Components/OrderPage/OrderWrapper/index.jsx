import React from "react";
import OrderItem from "../OrderItem";

const OrderWrapper = ({ item }) => {
  console.log(item);
  const totalAmt = item.products.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  const gst = (totalAmt * 0.02).toFixed(2);
  const finalAmt = parseFloat(totalAmt) + parseFloat(65) + parseFloat(gst);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {item.products.map((item, id) => (
        <OrderItem
          key={id}
          title={item.title}
          subtitle={item.subtitle}
          price={item.price}
          size={item.size}
          _id={item._id}
          img={item.img}
          quantity={item.quantity}
          stock={item.stock}
        />
      ))}
      <div>
        <h3>Order Total: {finalAmt}</h3>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>Address:</h3>
        <div>
          <h4>{item.address.address}</h4>
          <h4>{item.address.city}</h4>
          <h4>{item.address.country}</h4>
          <h4>{item.address.pincode}</h4>
          <h4>{item.address.state}</h4>
        </div>
      </div>
      <div>
        <h3>Status: {item.status}</h3>
      </div>
    </div>
  );
};

export default OrderWrapper;
