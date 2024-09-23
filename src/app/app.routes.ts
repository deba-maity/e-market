import { Routes } from '@angular/router';
import { ProductlistComponent } from './components/productlist/productlist.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
  { path: 'products', component: ProductlistComponent }, // Route for product list
];
