import { LOADING } from "../action";

const initialState = {
  loading: false,
};

const setLoading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default setLoading;
