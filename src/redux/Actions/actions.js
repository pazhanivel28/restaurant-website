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