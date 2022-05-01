export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (data, productId, size, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      title: data.title,
      subtitle: data.subtitle,
      img: data.img,
      _id: data._id,
      stock: data.stock,
      size: data.size,
      price: data.price,
      size,
      quantity,
    },
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
