import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';
import { ServiceManagementComponent } from './components/service-management/service-management';
import { MasterDataComponent } from './master-data/master-data';

export const routes: Routes = [
    { path: '', component: MasterDataComponent },
    { path: 'service-management', component: ServiceManagementComponent }
];
