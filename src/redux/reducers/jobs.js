import { ADD_JOBS, REMOVE, addJobs, removeJobs } from "../action";

const initialState = {
  content: [],
};

const jobsManagment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE:
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default jobsManagment;
