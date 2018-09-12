/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteProxyComponent } from './route-proxy/route-proxy.component';

const appRoutes: Routes = [
    {
        path: 'layer-one',
        component: RouteProxyComponent,
        outlet: 'popup-one',
        loadChildren: 'src/app/+layer-one/layer-one.module#LayerOneModule'
    },
    {
        path: 'layer-two',
        component: RouteProxyComponent,
        outlet: 'popup-two',
        loadChildren: 'src/app/+layer-two/layer-two.module#LayerTwoModule'
    },
    {
        path: 'layer-three',
        component: RouteProxyComponent,
        outlet: 'popup-three',
        loadChildren: 'src/app/+layer-three/layer-three.module#LayerThreeModule'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
