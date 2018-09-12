import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerOneRoutingModule } from './layer-one-routing.module';
import { LayerOneComponent } from './layer-one.component';

@NgModule({
    imports: [
        CommonModule,
        LayerOneRoutingModule
    ],
    declarations: [LayerOneComponent]
})
export class LayerOneModule {
}
