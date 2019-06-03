
export const PROCESSING_LOAN_REQUEST = "PROCESSING_LOAN_REQUEST";
export const PROCESSING_LOAN_SUCCESS = "PROCESSING_LOAN_SUCCESS";
export const PROCESSING_LOAN_FAILED = "PROCESSING_LOAN_FAILED";

export const CURRENT_LOAN_REQUEST = "CURRENT_LOAN_REQUEST";
export const CURRENT_LOAN_SUCCESS = "CURRENT_LOAN_SUCCESS";
export const CURRENT_LOAN_FAILED = "CURRENT_LOAN_FAILED";

const processData = [
    {
        name: "kk",
        amount: "$23.23",
        period: "3 months",
        rate:"12%",
        creditScore : "400-410",
        lenmoScore : "43",
        expired : 20
    }, {
        name: "SD",
        amount: "$23.23",
        period: "4 months",
        rate:"12%",
        creditScore : "600-660",
        lenmoScore : "43",
        expired : 50
    }
]

const currentData = [
    {
        name: "kk",
        amount: "$23.23",
        period: "3 months",
        rate:"12%",
        dueLeft : "$73.22",
        nextPayment : "July 27th",
        progress : { value : 2 , max : 10}
    }, {
        name: "SD",
        amount: "$23.23",
        period: "4 months",
        rate:"12%",
        dueLeft : "$890.22",
        nextPayment : "May 11th",
        progress : { value : 3 , max : 6}
    }
]

const processLoanStart = () => {
  return {
    type: PROCESSING_LOAN_REQUEST
  };
};
const processLoanSuccess = data => {
  return {
    type: PROCESSING_LOAN_SUCCESS,
    data
  };
};

const currentLoanStart = () => {
    return {
      type: CURRENT_LOAN_REQUEST
    };
  };
  const currentLoanSuccess = data => {
    return {
      type: CURRENT_LOAN_SUCCESS,
      data
    };
  };
  


function getProcessLoans() {
  return dispatch => {
    dispatch(processLoanStart());
    setTimeout(() => {
      dispatch(processLoanSuccess(processData));
    }, 0.2e4);
  };
}

function getCurrentLoans() {
    return dispatch => {
      dispatch(currentLoanStart());
      setTimeout(() => {
        dispatch(currentLoanSuccess(currentData));
      }, 0.2e4);
    };
  }

export const investmentActions = {
  getProcessLoans,
  getCurrentLoans
};
