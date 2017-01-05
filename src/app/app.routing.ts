import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: '**', redirectTo: '' }
]

export const Routing = RouterModule.forRoot(appRoutes);