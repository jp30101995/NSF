import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      // {
      //   path: 'person',
      //   loadChildren: './person/person.module#PersonModule'
      // },
      // {
      //   path: 'user',
      //   loadChildren: './user/user.module#UserModule'
      // },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule'
      },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'forms', loadChildren: './form/form.module#FormModule' },
      { path: 'family-tree', loadChildren: './family-tree/family-tree.module#FamilyTreeModule' },
      { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
      { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
      { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
      { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
