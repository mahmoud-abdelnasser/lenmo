// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Investment  from '../components/pages/investment/Investment';
import { investmentActions } from '../actions/investment';

function mapStateToProps(state) {
  return {
    investProcessing: state.investProcessing,
    investCurrent: state.investCurrent,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(investmentActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Investment);