import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerTwoRoutingModule } from './layer-two-routing.module';
import { LayerTwoComponent } from './layer-two.component';

@NgModule({
    imports: [
        CommonModule,
        LayerTwoRoutingModule
    ],
    declarations: [
        LayerTwoComponent
    ]
})
export class LayerTwoModule {
}
