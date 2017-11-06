import { MainMenuItem } from './main-menu-item';

export const MAINMENUITEMS: MainMenuItem[] = [
  {
    title: 'Main',
    icon: '',
    active: true,
    groupTitle : true,
    sub: '',
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Dashboards',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: "",
    routing: '/default-layout/dashboard',
    externalLink: '',
    budge: '',
    budgeColor: '#f44236'
  },
  {
    title: 'Customer',
    icon: 'fa fa-diamond',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'List',
        routing: '/default-layout/customer/list'
      },
      {
        title: 'Add Customer',
        routing: '/default-layout/customer/add'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  },
  {
    title: 'Project',
    icon: 'fa fa-diamond',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Project List',
        routing: '/default-layout/project/list'
      },
      {
        title: 'Add Project',
        routing: '/default-layout/project/add'
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: ''
  }
];