import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' },
    // {path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
