import { Routes, RouterModule } from '@angular/router';

import { MyNewComponentComponent } from './my-new-component/my-new-component.component';

const appRoutes: Routes = [
  { path: 'paises', component: MyNewComponentComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);
