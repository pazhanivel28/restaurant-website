import { actionType } from "../constant.js/actionType";

export const setData = (data) => {
  return { type: actionType.SET_DATA, payload: data };
};

export const updateBookMark = (data) => {
  return { type: actionType.UPDATE_BOOKMARK, payload: data };
};

export const deleteRestaurant = (data) => {
  return { type: actionType.DELETE_RESTAURANT, payload: data };
};

export const deleteRestaurantBookmark = (data) => {
  return { type: actionType.DELETE_RESTAURANT_BOOKMARK, payload: data };
};

export const setLogin = (data) => {
  return { type: actionType.SET_LOGIN, payload: data };
};
export const setLogout = (data) => {
  return { type: actionType.SET_LOGOUT, payload: data };
};