import Add_to_cart from "../Constants";
export const addToCart = (data) => {
  return {
    type: addToCart,
    data: data,
  };
};
// export const removeToCart = (data) => {
//   return {
//     type: "Remove_to_cart",
//     data: data,
//   };
// };
