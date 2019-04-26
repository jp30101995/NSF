import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'person',
        loadChildren: './person/person.module#PersonModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule'
      },

      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
      {
        path: 'components',
        loadChildren: './material-components/material-components.module#MaterialComponentsModule'
      },
      {
        path: 'forms',
        loadChildren: './forms/forms.module#FormsModule'
      },
      {
        path: 'grid',
        loadChildren: './grid/grid.module#GridModule'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      },
      {
        path: 'blank-page',
        loadChildren: './blank-page/blank-page.module#BlankPageModule'
      },
      // {
      //   path: 'member',
      //   loadChildren: './member/member.module#MemberModule'
      // },
      {
        path: 'familytree',
        loadChildren: './familytree/familytree.module#FamilytreeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
