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

              <div className="row align-items-center m-l-0">
                <div className="col-6 text-left">
                  <button type="button" className="btn  btn-icon btn-outline-danger">
                    <i className="feather icon-trash-2" />
                  </button>
                </div>
                <div className="col-6 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked={true} />
                    <label className="custom-control-label mx-2" htmlFor="customSwitch1">
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={basic} alt="" className="img-fluid" />
              <hr />
              <div className="row align-items-center m-l-0">
                <div className="col-6 text-left">
                  <button type="button" className="btn  btn-icon btn-outline-danger">
                    <i className="feather icon-trash-2" />
                  </button>
                </div>
                <div className="col-6 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                    <label className="custom-control-label mx-2" htmlFor="customSwitch2">
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={standard} alt="" className="img-fluid" />
              <hr />
              <div className="row align-items-center m-l-0">
                <div className="col-6 text-left">
                  <button type="button" className="btn  btn-icon btn-outline-danger">
                    <i className="feather icon-trash-2" />
                  </button>
                </div>
                <div className="col-6 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked={true} />
                    <label className="custom-control-label mx-2" htmlFor="customSwitch3">
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={premium} alt="" className="img-fluid" />
              <hr />
              <div className="row align-items-center m-l-0">
                <div className="col-6 text-left">
                  <button type="button" className="btn  btn-icon btn-outline-danger">
                    <i className="feather icon-trash-2" />
                  </button>
                </div>
                <div className="col-6 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked={true} />
                    <label className="custom-control-label mx-2" htmlFor="customSwitch4">
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4}>
          <Card>
            <Card.Body className="text-center">
            <hr />
              <img src={professional} alt="" className="img-fluid" />
              <hr />
              <div className="row align-items-center m-l-0">
                <div className="col-6 text-left">
                  <button type="button" className="btn  btn-icon btn-outline-danger">
                    <i className="feather icon-trash-2" />
                  </button>
                </div>
                <div className="col-6 text-right">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch5" defaultChecked={true} />
                    <label className="custom-control-label mx-2" htmlFor="customSwitch5">
                      Active
                    </label>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </React.Fragment>
  );
};

export default Plan;
