import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Pagination, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';

import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import makeData from '../../../data/schoolData';

function Table({ columns, data, modalOpen }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    globalFilter,
    setGlobalFilter,

    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          表示件数
          <select
            className="form-control w-auto mx-2"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="success" className="btn-sm btn-round has-ripple ml-2" onClick={modalOpen}>
            <i className="feather icon-plus" /> ユーザーを追加
          </Button>
        </Col>
      </Row>
      <BTable striped bordered hover responsive {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="feather icon-arrow-down text-muted float-right" />
                      ) : (
                        <span className="feather icon-arrow-up text-muted float-right" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      <Row className="justify-content-between">
        <Col>
          <span className="d-flex align-items-center">
            ページ数{' '}
            <strong>
              {' '}
              {pageIndex + 1} of {pageOptions.length}{' '}
            </strong>{' '}
            |
            <input
              type="number"
              min="0"
              className="form-control ml-2"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />ページ{' '}
          </span>
        </Col>
        <Col>
          <Pagination className="justify-content-end">
            <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
            <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
            <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
            <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
          </Pagination>
        </Col>
      </Row>
    </>
  );
}

const UserManagement = () => {

  const [validated, setValidated] = useState(false);
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [gender, setGender] = useState("");
  const [freeWord, setFreeWord] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'avatar'
      },
      {
        Header: '指名',
        accessor: 'name'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: '電話番号',
        accessor: 'phone'
      },
      {
        Header: '性別',
        accessor: 'sex'
      },
      {
        Header: '生年月日',
        accessor: 'date'
      },
      {
        Header: '年齢',
        accessor: 'age'
      },
      {
        Header: 'Options',
        accessor: 'action'
      }
    ],
    []
  );

  const data = React.useMemo(() => makeData(100), []);

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };


  return (
    <React.Fragment>
      <Row>
      <Col xl={3} md={12}>
          <Card>
            <Card.Body>
              <Row className="align-items-center m-l-0">
                <Col sm="auto">
                  <i className="fas fa-users f-36 text-c-purple" />
                </Col>
                <Col sm="auto">
                  <h6 className="text-muted m-b-10">ユーザー数</h6>
                  <h2 className="m-b-0">1,000</h2>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">絞り込み検索</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated}>
                <Row>
                  <Form.Group as={Col} md="3" controlId="name">
                    <Form.Label>名前</Form.Label>
                    <Form.Control required type="text" placeholder="山田 太郎" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                {/* 年齢の絞り込み: 最小年齢 */}
                <Form.Group as={Col} md="2" controlId="ageFrom">
                  <Form.Label>年齢(最小)</Form.Label>
                  <Form.Control type="number" placeholder="◯歳" value={ageFrom} onChange={(e) => setAgeFrom(e.target.value)} />
                </Form.Group>

                {/* 年齢の絞り込み: 最大年齢 */}
                <Form.Group as={Col} md="2" controlId="ageTo">
                  <Form.Label>年齢(最大)</Form.Label>
                  <Form.Control type="number" placeholder="◯歳" value={ageTo} onChange={(e) => setAgeTo(e.target.value)} />
                </Form.Group>
                  <Form.Group as={Col} md="5" controlId="email">
                    <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>都道府県</Form.Label>
                    <Form.Control type="text" placeholder="長崎県"  />
                    <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>住所</Form.Label>
                    <Form.Control type="text" placeholder="長崎市"  />
                    <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                  </Form.Group>

                {/* 性別 */}
                <Form.Group as={Col} md="3" controlId="gender">
                  <Form.Label>性別</Form.Label>
                  <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </Form.Control>
                </Form.Group>

                {/* フリーワード */}
                <Form.Group as={Col} md="12" controlId="freeWord">
                  <Form.Label>フリーワード</Form.Label>
                  <Form.Control type="text" placeholder="フリーワード" value={freeWord} onChange={(e) => setFreeWord(e.target.value)} />
                </Form.Group>
                </Row>
                <Button onClick={(e) => handleSubmit(e)} style={{ marginTop: '20px', backgroundColor: '#53A3FF', color: 'white' }}>検索</Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">ユーザー一覧</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table columns={columns} data={data} modalOpen={openHandler} />
            </Card.Body>
          </Card>
          <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title as="h5">ユーザー追加</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Name">
                      Name
                    </label>
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Email">
                      Email
                    </label>
                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Password">
                      Password
                    </label>
                    <input type="password" className="form-control" id="Password" placeholder="Password" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Phone">
                      Phone
                    </label>
                    <input type="number" className="form-control" id="Phone" placeholder="Phone" />
                  </div>
                </Col>
                <div className="col-sm-12">
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Address">
                      Address
                    </label>
                    <textarea className="form-control" id="Address" rows="3" placeholder="Address" />
                  </div>
                </div>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Sex">
                      Select Sex
                    </label>
                    <select className="form-control" id="Sex">
                      <option value="" />
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Icon">
                      Profie Image
                    </label>
                    <input type="file" className="form-control" id="Icon" placeholder="Profie Image" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Birth">
                      Birth Date
                    </label>
                    <input type="date" className="form-control" id="Birth" placeholder="Birth Date" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Age">
                      Age
                    </label>
                    <input type="text" className="form-control" id="Age" placeholder="Age" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Blood">
                      Select Blood Group
                    </label>
                    <select className="form-control" id="Blood">
                      <option value="" />
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Clear
              </Button>
              <Button variant="primary">Submit</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>


    </React.Fragment>
  );
};

export default UserManagement;
