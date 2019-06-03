const initState = { loading: false, payload: [], error: {} };

export default function investProcessing(state = initState, action) {
  switch (action.type) {
    case "PROCESSING_LOAN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "PROCESSING_LOAN_SUCCESS":
      return {
        ...state,
        loading: false,
        payload: action.data
      };
    case "PROCESSING_LOAN_FAILED":
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
