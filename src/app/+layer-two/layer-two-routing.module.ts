import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayerTwoComponent } from './layer-two.component';

const routes: Routes = [
    {path: '', component: LayerTwoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayerTwoRoutingModule {
}
