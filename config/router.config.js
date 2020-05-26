export default [
  {
    path: '/login',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/login',
        component: './login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    access: 'adminLogin',
    wrappers: ['@/wrappers/auth'],
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        name: 'user.manager',
        icon: 'user',
        path: '/user',
        routes: [
          {
            path: 'list',
            name: 'list',
            access: 'adminUserList',
            component: './user/list',
          },
          {
            path: 'rank',
            name: 'rank',
            access: 'adminUserRankList',
            component: './user/rank',
          },
          {
            path: 'credit',
            name: 'credit',
            access: 'adminUserBankCreditConfig',
            component: './user/credit',
          },
          {
            path: 'score',
            name: 'score',
            access: 'adminUserBankScoreConfig',
            component: './user/score',
          },
        ],
      },
      {
        name: 'tag.manager',
        icon: 'tag',
        path: '/tag',
        routes: [
          {
            path: 'list',
            name: 'list',
            component: './tag/list',
          },
          {
            path: 'group',
            name: 'group',
            component: './tag/group',
          },
        ],
      },
      {
        name: 'system',
        icon: 'robot',
        path: '/system',
        routes: [
          {
            path: 'permission',
            name: 'permission',
            access: 'adminSystemPermissionList',
            component: './system/permission',
          },
          {
            path: 'role',
            name: 'role',
            access: 'adminSystemRoleList',
            component: './system/role',
          },
          {
            path: 'setting',
            name: 'setting',
            access: 'adminSysSettingEdit',
            component: './system/setting',
          },
          {
            path: 'link',
            name: 'link',
            component: './system/link',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
  {
    component: './403',
  },
  {
    component: './500',
  },
  {
    component: './404',
  },
];
