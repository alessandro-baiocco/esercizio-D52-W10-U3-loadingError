import { ERROR, STATUS } from "../action";

const initialState = {
  error: false,
};

const setError = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default setError;
