import React from 'react';

import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

import './components.css';

class Cards extends React.Component {
  render() {
    return (
      <>
        <div className='col-lg-4 col-md-6'>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle className="text-uppercase mb-0 title">
                    traffic
                  </CardTitle>
                  <span className="mb-0 number">350,897</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">
                <span className="mr-2 perc">
                  <i className="fa fa-arrow-up" /> 3.48%
                </span>
                <span className="text-nowrap time">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Cards;
