import { actionType } from "../constant.js/actionType";

const initialState = {
  data: [],
  bookmarkData:[]
};
export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA:
      const addData = [...state.data, payload];
      return { ...state, data: addData };
    case actionType.UPDATE_BOOKMARK:
      const remainData = state.data.filter((values) => values.id !== payload.id);
      const bookedData = [...state.bookmarkData, payload];
      return { ...state, data: remainData,bookmarkData:bookedData };
    case actionType.DELETE_RESTAURANT:
      const deletedRest = state.data.filter((values) => values.id !== payload.id);
      return { ...state, data: deletedRest };
    default:
      return state;
  }
};
