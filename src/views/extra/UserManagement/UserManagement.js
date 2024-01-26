import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Pagination, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';

import OrderCard from '../../../components/Widgets/Statistic/OrderCard';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import makeData from '../../../data/schoolData';

function Table({ columns, data, modalOpen, modalSquare }) {
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
        <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="warning" className="btn-sm btn-round has-ripple ml-2" onClick={modalSquare}>
            <i className="feather icon-share-2" /> スクエアを作成
          </Button>
          <Button variant="success" style={{ marginLeft: '10px' }}　className="btn-sm btn-round has-ripple ml-2" onClick={modalOpen}>
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

  const [selectAll, setSelectAll] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'selected', // 'selected' プロパティを参照
        Cell: ({ row }) => (
          <input type="checkbox" checked={row.original.selected} onChange={() => handleCheckboxChange(row.original)} style={{ width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
        )
      },
      {
        Header: '#',
        accessor: 'avatar'
      },
      {
        Header: '管理名',
        accessor: 'managementname'
      },
      {
        Header: '氏名',
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
    [selectAll]
  );

  const data = React.useMemo(() => makeData(100), []);

  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };

  const [isOpenSquareCreate, setIsOpenSquareCreate] = useState(false);
  const openSquareCreateHandler = () => {
    setIsOpenSquareCreate(true);
  };

  // チェックボックスの状態が変更された時のハンドラ
  const handleCheckboxChange = (row) => {
    row.selected = !row.selected;
  };

  // 一斉にチェックをつけたり外したりするハンドラ
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    // データの各行に対して一斉にチェックボックスの状態をセット
    data.forEach((row) => {
      row.selected = !selectAll;
    });
  };

  return (
    <React.Fragment>
            <Row>
      <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: '管理ユーザー数',
              class: 'bg-c-blue',
              icon: 'fa fa-duotone fa-users',
              primaryText: '730名 / 1,000名',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: '登録 証明書/推薦状数',
              class: 'bg-c-green',
              icon: 'fa fa-solid fa-address-card',
              primaryText: '8枚 / 10枚',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: '〇〇〇〇',
              class: 'bg-c-yellow',
              icon: 'feather icon-repeat',
              primaryText: '0000',
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: '現在のプラン',
              class: 'bg-c-red',
              icon: 'feather icon-award',
              primaryText: 'プレミアム',
            }}
          />
        </Col>
      </Row>
      <Row>
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

                {/* メールアドレス */}
                  <Form.Group as={Col} md="5" controlId="email">
                    <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="XXXX@XXX.com" />
                  </Form.Group>
                </Row>

                {/* 住所 */}
                <Row>
                  <Form.Group as={Col} md="6" controlId="address">
                    <Form.Label>住所</Form.Label>
                    <Form.Control type="text" placeholder="都道府県 市区町村"  />
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

                {/* 所有資格・スキル */}
                <Form.Group as={Col} md="4" controlId="skill">
                  <Form.Label>所有資格・スキル</Form.Label>
                  <Form.Control type="text" placeholder="簿記 TOEIC" value={freeWord} onChange={(e) => setFreeWord(e.target.value)} />
                  </Form.Group>

                {/* 学歴 */}
                <Form.Group as={Col} md="4" controlId="Academic">
                  <Form.Label>学歴</Form.Label>
                  <Form.Control type="text" placeholder="〇〇大学" value={freeWord} onChange={(e) => setFreeWord(e.target.value)} />
                  </Form.Group>

                {/* 職歴 */}
                <Form.Group as={Col} md="4" controlId="Work">
                  <Form.Label>職歴</Form.Label>
                  <Form.Control type="text" placeholder="株式会社〇〇" value={freeWord} onChange={(e) => setFreeWord(e.target.value)} />
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
              {/* チェックボックス一斉選択のボタン */}
              <Button variant="secondary" className="mb-3" onClick={handleSelectAll}>
                全て選択
              </Button>
            <Table columns={columns} data={data} modalOpen={openHandler} modalSquare={openSquareCreateHandler} selectAll={selectAll} handleSelectAll={handleSelectAll} />
            </Card.Body>
          </Card>
          <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title as="h5">ユーザー追加</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Name">
                      管理名
                    </label>
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Email">
                      Email
                    </label>
                    <input type="email" className="form-control" id="Email" placeholder="Email" />
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                キャンセル
              </Button>
              <Button variant="primary">追加</Button>
            </Modal.Footer>
          </Modal>

          {/* スクエアモーダル */}
          <Modal show={isOpenSquareCreate} onHide={() => setIsOpenSquareCreate(false)}>
            <Modal.Header closeButton>
              <Modal.Title as="h5">スクエアを作成する</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={12}>
                  <div className="form-group fill pb-2">
                    <label className="floating-label" htmlFor="Name">
                      スクエア名
                    </label>
                    <input type="text" className="form-control" id="Name" placeholder="Square Name" />
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setIsOpenSquareCreate(false)}>
                キャンセル
              </Button>
              <Button variant="primary">作成</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>


    </React.Fragment>
  );
};

export default UserManagement;
