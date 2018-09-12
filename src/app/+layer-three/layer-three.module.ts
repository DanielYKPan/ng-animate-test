import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerThreeRoutingModule } from './layer-three-routing.module';
import { LayerThreeComponent } from './layer-three.component';

@NgModule({
    imports: [
        CommonModule,
        LayerThreeRoutingModule
    ],
    declarations: [
        LayerThreeComponent
    ]
})
export class LayerThreeModule {
}
