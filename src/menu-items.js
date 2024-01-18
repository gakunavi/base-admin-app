const menuItems = {
  items: [
    {
      id: 'MENU',
      title: 'MENU',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'dashboard-menu',
          title: 'ダッシュボード',
          type: 'item',
          url: '/dashboard',
          classes: 'nav-item',
          icon: 'feather icon-home',
        },
        {
          id: 'user-management',
          title: 'ユーザー管理',
          type: 'item',
          url: '/user-management',
          classes: 'nav-item',
          icon: 'fa fa-duotone fa-users'
        },
        {
          id: 'diploma',
          title: '証明書/推薦状',
          type: 'collapse',
          classes: 'nav-item',
          icon: 'fa fa-solid fa-address-card',
          children: [
            {
              id: 'diploma-management',
              title: '管理',
              type: 'item',
              url: '/diploma-management',
            },
            {
              id: 'diploma-management-create',
              title: '新規作成',
              type: 'item',
              url: '/diploma-management-create'
            }
          ]
        },
        {
          id: 'chat',
          title: 'チャット',
          type: 'item',
          url: '/chat',
          classes: 'nav-item',
          icon: 'fa fa-comments'
        },
        {
          id: 'sample-page',
          title: 'Sample Page',
          type: 'item',
          url: '/sample-page',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        }
      ]
    }
  ]
};

export default menuItems;
