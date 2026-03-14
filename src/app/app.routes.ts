import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { ServiceManagementComponent } from './components/service-management/service-management';
import { MasterDataComponent } from './master-data/master-data';
import { OffersComponent } from './offers/offers.component';

export const routes: Routes = [
    { path: '', component: OffersComponent },
    { path: 'service-management', component: ServiceManagementComponent },
];
