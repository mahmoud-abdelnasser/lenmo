const initState = { loading: false, payload: [], error: {} };

export default function investCurrent(state = initState, action) {
  switch (action.type) {
    case "CURRENT_LOAN_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "CURRENT_LOAN_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: action.data
      };

    case "CURRENT_LOAN_FAILED":
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
