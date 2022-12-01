import { actionType } from "../constant.js/actionType";

const initialState = {
  data: [],
  bookmarkData: [],
  loginState: false
};
export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA:
      const addData = [...state.data, payload];
      return { ...state, data: addData };
    
    case actionType.UPDATE_BOOKMARK:
      const remainData = state.data.filter((values) => values.id !== payload.id);
      const bookedData = [...state.bookmarkData, payload];
      return { ...state, data: remainData, bookmarkData: bookedData };
    
    case actionType.DELETE_RESTAURANT:
      const deletedRest = state.data.filter((values) => values.id !== payload.id);
      return { ...state, data: deletedRest };
    
    case actionType.DELETE_RESTAURANT_BOOKMARK:
      const deletedRestBookmark = state.bookmarkData.filter((values) => values.id !== payload.id);
      return { ...state, bookmarkData: deletedRestBookmark };
    
    case actionType.SET_LOGIN:
      return { ...state, loginState: true }
    
    case actionType.SET_LOGOUT:
      return {...state,loginState:false}
    
    default:
      return state;
  }
};
