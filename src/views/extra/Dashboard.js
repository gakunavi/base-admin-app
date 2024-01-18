import React from 'react';
import { Row, Col } from 'react-bootstrap';

import OrderCard from '../../components/Widgets/Statistic/OrderCard';
import Card from '../../components/Card/MainCard';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Row>
      <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'ユーザー数',
              class: 'bg-c-blue',
              icon: 'fa fa-duotone fa-users',
              primaryText: '486',
              secondaryText: 'Completed Orders',
              extraText: '351'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: '登録 証明書/推薦状',
              class: 'bg-c-green',
              icon: 'fa fa-solid fa-address-card',
              primaryText: '1641',
              secondaryText: 'This Month',
              extraText: '213'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Revenue',
              class: 'bg-c-yellow',
              icon: 'feather icon-repeat',
              primaryText: '$2,562',
              secondaryText: 'This Month',
              extraText: '$5,032'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Total Profit',
              class: 'bg-c-red',
              icon: 'feather icon-award',
              primaryText: '$9,562',
              secondaryText: 'This Month',
              extraText: '$542'
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
