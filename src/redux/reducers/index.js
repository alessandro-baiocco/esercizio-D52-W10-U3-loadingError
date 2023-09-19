const initialState = {
  addedJobs: { content: [] },
};

const myreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return {
        ...state,
        addedJobs: {
          ...state.addedJobs,

          content: [...state.addedJobs.content, action.payload],
        },
      };

    case "REMOVE":
      return {
        ...state,
        addedJobs: {
          content: state.addedJobs.content.filter((_, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default myreducer;
