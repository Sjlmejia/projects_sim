import { Routes } from '@angular/router';
import { LayoutComponent } from './components/shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./project_1/components/item-list/item-list.component')
      },
      {
        path: 'reactive-form',
        loadComponent: () => import('./project_2/components/reactive-form/reactive-form.component')
      },
      {
        path: 'tooltip',
        loadComponent: () => import('./project_3/components/tooltip/tooltip.component')
      },
      {
        path: 'items-firebase',
        loadComponent: () => import('./project_5/components/items-firebase/items-firebase.component')
      }
    ]
  }
];
