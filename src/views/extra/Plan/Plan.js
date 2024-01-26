import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';

import lite from '../../../assets/images/plan/lite.svg';
import basic from '../../../assets/images/plan/basic.svg';
import standard from '../../../assets/images/plan/standard.svg';
import premium from '../../../assets/images/plan/premium.svg';
import professional from '../../../assets/images/plan/professional.svg';

const Plan = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Row className="btn-page justify-content-center">
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={lite} alt="" className="img-fluid" />
              <hr />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={basic} alt="" className="img-fluid" />
              <hr />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={standard} alt="" className="img-fluid" />
              <hr />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={premium} alt="" className="img-fluid" />
              <hr />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={professional} alt="" className="img-fluid" />
              <hr />
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  );
};

export default Plan;
