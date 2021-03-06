import * as actionTypes from "./actionTypes";
import axios from "axios";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = (error) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: error.message,
  };
};

export const clearError = () => {
  return {
    type: actionTypes.CLEAR_ERROR,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-app-c00d5-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed(error));
      });
  };
};
