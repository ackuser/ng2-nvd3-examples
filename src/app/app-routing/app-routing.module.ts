import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNewComponentComponent } from '../my-new-component/my-new-component.component';

const appRoutes: Routes = [
    { path: 'hero', component: MyNewComponentComponent }
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
  //   // canLoad: [AuthGuard]
  // }
  // ,
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    //   ,
    //   { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // CanDeactivateGuard,
    // SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
