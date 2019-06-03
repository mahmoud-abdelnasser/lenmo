// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout  from '../components/Layout';
import { investmentActions } from '../actions/investment';

function mapStateToProps(state) {
  return {
    investment: state.investment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(investmentActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);