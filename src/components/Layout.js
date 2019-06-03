
import React, { Component } from 'react';

import Nav from './Nav';
import Topbar from './Topbar';


class Layout extends Component{

  render() {
    const { investment, noheader } = this.props;
    console.log('investment', investment);
    return (
      <div className="container-fluid">
        <div className="row">
          <Nav/>
          <main role="main">
           
            {noheader || (
              <Topbar
                user={"Mahmoud Abdelnasser"}
              />
            )}
            <div className={'page-content'}>
            <div className="page-bg"></div>
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Layout