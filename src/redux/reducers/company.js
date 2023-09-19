import { GET_COMPANY } from "../action";

const initialState = {
  content: null,
};

const listCompany = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default listCompany;
