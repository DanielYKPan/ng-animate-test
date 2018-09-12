import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayerOneComponent } from './layer-one.component';

const routes: Routes = [
    {path: '', component: LayerOneComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayerOneRoutingModule {
}
