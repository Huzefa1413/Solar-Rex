import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div style={{ width: "18rem" }}>
          <Card className="card-stats mb-4 mb-lg-0">
            <CardBody>
              <Row>
                <div className="col">
                                <CardTitle className="text-uppercase mb-0" style={{
                                    fontSize:'13px',fontWeight:'600',lineHeight:'19.5px',color: '#8898aa'
                }}>
                    traffic
                  </CardTitle>
                  <span className="mb-0" style={{fontSize:'20px',fontWeight:'600',lineHeight:'30px',color: '#32325d'}}>350,897</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-danger text-white rounded-circle shadow" style={{
    padding: '12px',
    width: '3rem',
    textAlign: 'center',
    height: '3rem'}}
>
                    <i className="fas fa-chart-bar" />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">
                            <span className="mr-2" style={{color:'#2dce89',fontWeight:'300',lineHeight:'23.8px'}} >
                                <i className="fa fa-arrow-up" />
                  {" "}3.48%
                </span>
                <span className="text-nowrap" style={{color:'#8898aa',fontSize:'14px',fontWeight:'300',lineHeight:'23.8px'}} >Since last month</span>
              </p>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default Cards;
