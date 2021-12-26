import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'tv-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Scroll Infinite',
    icon: 'download-outline',
    component: 'ScrollScreen',
  },
  {
    name: 'Slide Screen',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme',
    icon: 'color-palette-outline',
    component: 'ChangeThemeScreen',
  },
];
