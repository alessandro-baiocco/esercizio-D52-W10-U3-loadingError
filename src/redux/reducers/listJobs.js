import { GET_JOBS } from "../action";

const initialState = {
  content: null,
};

const listJob = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default listJob;
