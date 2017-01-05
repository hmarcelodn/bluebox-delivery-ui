import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';
import { OrderComponent } from './Order/order.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', redirectTo: '' }
]

export const Routing = RouterModule.forRoot(appRoutes);