import Add_to_cart from "../Constants";

const initialState = {
  cardData: [],
};

export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case Add_to_cart:
      return {
        ...state,
        cardData: action.data,
      };
      break;

    default:
      return this.state;
      break;
  }
}
