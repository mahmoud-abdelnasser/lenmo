import React, { Component, Fragment } from "react";
import { Row, Col, Progress } from "reactstrap";

class InvestBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, data } = this.props;
    return (
      <div className="invest-box">
        <h2>{title}</h2>
        {data.loading ? (
          <i className="fas fa-spinner fa-pulse" />
        ) : (
          data.payload.map((value, index) => {
            return (
              <div className="invest-card" key={index}>
                <div className="invest-card-top">
                  <div className="card-name">
                    <i className="fas fa-user-circle" />
                    <span>{value.name}</span>
                  </div>

                  <div className="invest-card-content">
                    <Row>
                      {value.amount && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"Amount"}</span>
                            <span>{value.amount}</span>
                          </div>
                        </Col>
                      )}
                      {value.period && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"payback period"}</span>
                            <span>{value.period}</span>
                          </div>
                        </Col>
                      )}
                      {value.rate && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"interest rate"}</span>
                            <span>{value.rate}</span>
                          </div>
                        </Col>
                      )}
                      {value.creditScore && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"credit score"}</span>
                            <span>{value.creditScore}</span>
                          </div>
                        </Col>
                      )}
                      {value.lenmoScore && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"lenmo score"}</span>
                            <span>{value.lenmoScore}</span>
                          </div>
                        </Col>
                      )}
                      {value.dueLeft && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"due Left"}</span>
                            <span>{value.dueLeft}</span>
                          </div>
                        </Col>
                      )}
                      {value.nextPayment && (
                        <Col md="4">
                          <div className="card-content-item">
                            <span>{"next payment"}</span>
                            <span>{value.nextPayment}</span>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                </div>
                <div className="invest-card-footer">
                  <div className="invest-footer-content">
                    {value.expired && (
                      <Fragment>
                        <span className="text">
                          {`Expires in ${value.expired} hrs`}
                        </span>
                        <span className="text">
                          {`Wating for ${value.name} to accept offer.`}
                        </span>
                      </Fragment>
                    )}
                    {value.progress && (
                      <Fragment>
                        <Progress
                          value={value.progress.value}
                          max={value.progress.max}
                        />
                        <span className="ratio">{`${value.progress.value}/${value.progress.max}`}</span>
                      </Fragment>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default InvestBox;
