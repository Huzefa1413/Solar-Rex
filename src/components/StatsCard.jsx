import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Cards = (props) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle className="text-uppercase mb-2 title">
                {props.title}
              </CardTitle>
              <span className="mb-0 number">{props.value} kWh</span>
            </div>
            <Col className="col-auto">
              <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                <i className="fa fa-bolt" />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
