import { actionType } from "../constant.js/actionType";

const initialState = {
  data: [],
};
export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA:
      const addData = [...state.data, payload];
      return { ...state, data: addData };
    
    default:
      return state;
  }
};
