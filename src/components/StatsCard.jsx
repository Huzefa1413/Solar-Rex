import React from 'react';

import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

import './components.css';
import { useAuth } from '../ContextAPI/Components/auth';
const Cards = (props) => {
  const { user } = useAuth();
  return (
    <>
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
            {/* <p className="mt-3 mb-0 text-sm">
              {props.perc > 0 ? (
                <span className="mr-2 perc text-success">
                  <i className="fa fa-arrow-up" />
                  <span> {props.perc}%</span>
                </span>
              ) : (
                <span className="mr-2 perc text-danger">
                  <i className="fa fa-arrow-down" />
                  <span> {props.perc}%</span>
                </span>
              )}

              <span className="text-nowrap time">Since {props.date}</span>
            </p> */}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;
