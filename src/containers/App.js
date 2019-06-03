
import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../constants/routes.json';

import Layout from './Layout';
import Investment from './Investment';
import CommingSoon from '../components/pages/CommingSoon';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        <Layout>
          <Component {...props} />
        </Layout>
    }
  />
);

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={'wrapper'}>
        <Switch>
          <PrivateRoute exact path={routes.DASHBOARD} component={CommingSoon} />
          <PrivateRoute exact path={routes.INVESTMENT} component={Investment} />
          <PrivateRoute exact path={routes.BANK_TRANSFER} component={CommingSoon} />
          <PrivateRoute exact path={routes.SETTINGS} component={CommingSoon} />
          <PrivateRoute exact path={routes.SUPPORT} component={CommingSoon} />
          <Route exact path={routes.HOME} render={() => <Redirect to={routes.INVESTMENT} />} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    investment: state.investment,
  };
}


export default withRouter(connect(
  mapStateToProps,
)(App));