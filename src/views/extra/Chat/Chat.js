import React, { useState, useCallback } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Modal, Table, Tabs, Tab, Carousel, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Avatar1 from '../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../assets/images/user/avatar-3.jpg';
import Avatar4 from '../../../assets/images/user/avatar-4.jpg';
import Avatar5 from '../../../assets/images/user/avatar-5.jpg';

import imgSlide1 from '../../../assets/images/slider/img-slide-1.jpg';
import imgSlide2 from '../../../assets/images/slider/img-slide-2.jpg';
import imgSlide4 from '../../../assets/images/slider/img-slide-4.jpg';
import imgSlide5 from '../../../assets/images/slider/img-slide-5.jpg';

import coverImage from '../../../assets/images/profile/cover.jpg';
const Chat = () => {

  const [activeProfileTab, setActiveProfileTab] = useState('personal');
  const [isPersonalEdit, setIsPersonalEdit] = useState(false);
  const [isContactEdit, setIsContactEdit] = useState(false);
  const [isOtherEdit, setIsOtherEdit] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const profileTabClass = 'nav-link text-reset';
  const profileTabActiveClass = 'nav-link text-reset active';

  const profilePanClass = 'tab-pane fade';
  const profilePanActiveClass = 'tab-pane fade show active';

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handleCircleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <React.Fragment>
      <Row>
        <Col xl={ 4 } md={ 12 }>
        <ul className="nav nav-tabs profile-tabs nav-fill" id="myTab" role="tablist">
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={activeProfileTab === 'personal' ? profileTabActiveClass : profileTabClass}
                      onClick={() => {
                        setActiveProfileTab('personal');
                      }}
                      id="personal-tab"
                    >
                      <i className="feather icon-user mr-2 px-2" />
                      個人
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={activeProfileTab === 'group' ? profileTabActiveClass : profileTabClass}
                      onClick={() => {
                        setActiveProfileTab('group');
                      }}
                      id="group-tab"
                    >
                      <i className="feather icon-users mr-2 px-2" />
                      グループ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className={activeProfileTab === 'square' ? profileTabActiveClass : profileTabClass}
                      onClick={() => {
                        setActiveProfileTab('square');
                      }}
                      id="square-tab"
                    >
                      <i className="feather icon-share-2 mr-2 px-2" />
                      スクエア
                    </Link>
                  </li>
          </ul>

          {activeProfileTab === 'personal' && (
          <div className={profilePanActiveClass} id="personal">
        {/* Cardの親divにposition: relativeを適用 */}
        <div style={{ position: 'relative' }}>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        30 min ago
                      </span>
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        10 min ago
                      </span>
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Shirley Hoe</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>James Alexander</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        10 min ago
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </PerfectScrollbar>
            </div>
              </Card>
                        {/* サークルボタンの位置を絶対的に調整 */}
          <div className="circle-button" onClick={handleCircleButtonClick} style={{ position: 'absolute', right: '10px', bottom: '10px', backgroundColor:'#55A4FF', color:'#fff' }}>
          <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        {/* モーダルのコードは変更なし */}
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>個人チャット</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        30 min ago
                      </span>
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Shirley Hoe</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>James Alexander</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        10 min ago
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </PerfectScrollbar>
              </div>
              </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              閉じる
            </Button>
            <Button variant="primary" style={{ color: "#fff" }}>保存</Button>
          </Modal.Footer>
        </Modal>
          </div>
            )}

        {activeProfileTab === 'group' && (
            <div className={ activeProfileTab === 'group' ? profilePanActiveClass : profilePanClass } id="group">
                      {/* Cardの親divにposition: relativeを適用 */}
        <div style={{ position: 'relative' }}>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        30 min ago
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </PerfectScrollbar>
            </div>
            </Card>
                          {/* サークルボタンの位置を絶対的に調整 */}
            <div className="circle-button" onClick={handleCircleButtonClick} style={{ position: 'absolute', right: '10px', bottom: '10px', backgroundColor:'#55A4FF', color:'#fff' }}>
          <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        {/* モーダルのコードは変更なし */}
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>グループを作成</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                          </div>
                          <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                          </div>
                          <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                          </div>
                          <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                </Card.Body>
              </PerfectScrollbar>
              </div>
              </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              閉じる
            </Button>
            <Button variant="primary" style={{ color: "#fff" }}>保存</Button>
          </Modal.Footer>
        </Modal>
          </div>
          )}

        {activeProfileTab === 'square' && (
            <div className={ activeProfileTab === 'square' ? profilePanActiveClass : profilePanClass } id="square">
                      {/* Cardの親divにposition: relativeを適用 */}
        <div style={{ position: 'relative' }}>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        30 min ago
                      </span>
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Shirley Hoe</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>James Alexander</h6>
                      </Link>
                      <p className="m-b-0">stay hungry stay foolish!</p>
                      <span className="status active" />
                    </div>
                  </div>
                  <div className="align-middle m-b-25">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>John Doue</h6>
                      </Link>
                      <p className="m-b-0">Cheers!</p>
                      <span className="status deactive">
                        <i className="far fa-clock m-r-10" />
                        10 min ago
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </PerfectScrollbar>
              </div>
              </Card>
                        {/* サークルボタンの位置を絶対的に調整 */}
            <div className="circle-button" onClick={handleCircleButtonClick} style={{ position: 'absolute', right: '10px', bottom: '10px', backgroundColor:'#55A4FF', color:'#fff' }}>
          <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        {/* モーダルのコードは変更なし */}
        <Modal show={isModalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>スクエアを作成</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card className="new-cust-card">
            <div style={{ height: '615px' }}>
              <PerfectScrollbar>
                <Card.Body className="p-b-0">
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                          </div>
                          <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                          </div>
                          <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                <div className="align-middle m-b-25 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" />
                    <div className="d-inline-block">
                      <Link to="#">
                        <h6>Alex Thompson</h6>
                      </Link>
                    </div>
                  </div>
                  <input type="checkbox" className="status-checkbox" />
                </div>
                </Card.Body>
              </PerfectScrollbar>
              </div>
              </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              閉じる
            </Button>
            <Button variant="primary" style={{ color: "#fff" }}>保存</Button>
          </Modal.Footer>
        </Modal>
            </div>
            )}
          </Col>

      <Col xl={8} md={12}>
          <Card className="chat-card px-2">
            <Card.Header>
              <Card.Title as="h5">山田太郎</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div style={{ height: '550px' }}>
                <PerfectScrollbar>
                  <div className="p-l-20 p-r-20">
                    <div className="row m-b-20 received-chat">
                      <div className="col-auto p-r-0">
                        <img src={Avatar1} alt="user" className="img-radius" style={{ width: '30px' }} />
                      </div>
                      <div className="col">
                        <div className="msg">
                          <p className="m-b-0">Nice to meet you!</p>
                        </div>
                        <p className="m-b-0">
                          <i className="fa fa-clock-o m-r-10" />
                          10:20am
                        </p>
                      </div>
                    </div>
                    <div className="row m-b-20 send-chat">
                      <div className="col">
                        <div className="msg">
                          <p className="m-b-0">Nice to meet you!</p>
                        </div>
                        <p className="m-b-0">
                          <i className="fa fa-clock-o m-r-10" />
                          10:20am
                        </p>
                      </div>
                      <div className="col-auto p-l-0">
                        <img src={Avatar2} alt="user" className="img-radius" style={{ width: '30px' }} />
                      </div>
                    </div>
                    <div className="row m-b-20 received-chat">
                      <div className="col-auto p-r-0">
                        <img src={Avatar1} alt="user" className="img-radius" style={{ width: '30px' }} />
                      </div>
                      <div className="col">
                        <div className="msg">
                          <p className="m-b-0">Nice to meet you!</p>
                          <img className="img-fluid" src={imgSlide4} alt="" />
                          <img className="img-fluid" src={imgSlide5} alt="" />
                        </div>
                        <p className="m-b-0">
                          <i className="fa fa-clock-o m-r-10" />
                          10:20am
                        </p>
                      </div>
                    </div>
                    <div className="row m-b-20 send-chat">
                      <div className="col">
                        <div className="msg">
                          <p className="m-b-0">Nice to meet you!</p>
                        </div>
                        <p className="m-b-0">
                          <i className="fa fa-clock-o m-r-10" />
                          10:20am
                        </p>
                      </div>
                      <div className="col-auto p-l-0">
                        <img src={Avatar2} alt="user" className="img-radius" style={{ width: '30px' }} />
                      </div>
                    </div>
                    <div className="row m-b-20 received-chat">
                      <div className="col-auto p-r-0">
                        <img src={Avatar1} alt="user" className="img-radius" style={{ width: '30px' }} />
                      </div>
                      <div className="col">
                        <div className="msg">
                          <p className="m-b-0">Nice to meet you!</p>
                          <img className="img-fluid" src={imgSlide1} alt="" />
                          <img className="img-fluid" src={imgSlide2} alt="" />
                        </div>
                        <p className="m-b-0">
                          <i className="fa fa-clock-o m-r-10" />
                          10:20am
                        </p>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
              <div className="right-icon-control m-15">
                <div className="input-group input-group-button">
                  <input type="text" className="form-control" placeholder="Send message" />
                  <div className="input-group-append">
                    <Button variant="success" type="button">
                      <i className="feather icon-message-circle m-0 text-white" />
                    </Button>
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

export default Chat;
