import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import InvestBox from "./InvestBox";
class Investment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProcessLoans();
    this.props.getCurrentLoans();
  }
  render() {
    const { investCurrent, investProcessing } = this.props;
    return (
      <div className="invest-page page-body">
        <div className="container">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1>My loan</h1>
              <InvestBox title={"Processing Loans"} data={investProcessing} />
              <InvestBox title={"Current Loans"} data={investCurrent} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Investment;
