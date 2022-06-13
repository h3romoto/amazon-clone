import { defaultListboxReducer } from "@mui/base";

export const initialState = {
  basket: [], 
};

// Selector
  // reducer iterates throught the basket and returns the total amount 
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };

      default:
        return state;
  }

}

export default reducer;