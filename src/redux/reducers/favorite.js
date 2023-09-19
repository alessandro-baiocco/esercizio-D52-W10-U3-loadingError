import { ADD_FAVORITES, REMOVE_FAVORITES } from "../action";

const initialState = {
  content: [],
};

const favManagment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        content: state.content.filter((name) => name.company_name !== action.payload),
      };

    default:
      return state;
  }
};

export default favManagment;
