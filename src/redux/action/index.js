export const ADD_JOBS = "ADD_JOBS";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE = "REMOVE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const GET_JOBS = "GET_JOBS";
export const GET_COMPANY = "GET_COMPANY";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const STATUS = "STATUS";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?";

export const addJobs = (data) => ({ type: ADD_JOBS, payload: data });
export const addFavorites = (data) => ({ type: ADD_FAVORITES, payload: data });
export const removeJobs = (i) => ({ type: REMOVE, payload: i });
export const removeFavorites = (i) => ({ type: REMOVE_FAVORITES, payload: i });
export const isLoading = (bool) => ({ type: LOADING, payload: bool });
export const isError = (bool) => ({ type: ERROR, payload: bool });
export const status = (num) => ({ type: STATUS, payload: num });

export const getJobs = (query) => {
  return async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await fetch(baseEndpoint + "search=" + query + "&limit=20");
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        dispatch({ type: ERROR, payload: true });
        dispatch({ type: STATUS, payload: response.status });
        throw new Error("Errore nel reperimento dati");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: LOADING, payload: false });
    }
  };
};

export const listCompany = (param) => {
  return async (dispatch, getState) => {
    try {
      const listCompany = async () => {
        const response = await fetch(baseEndpoint + "company=" + param);
        if (response.ok) {
          const { data } = await response.json();
          dispatch({ type: GET_COMPANY, payload: data });
        } else {
          alert("Error fetching results");
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
};
