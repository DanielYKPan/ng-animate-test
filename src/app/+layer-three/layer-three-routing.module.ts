import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayerThreeComponent } from './layer-three.component';

const routes: Routes = [
    {path: '', component: LayerThreeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayerThreeRoutingModule {
}
