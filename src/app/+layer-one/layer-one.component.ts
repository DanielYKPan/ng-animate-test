import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { animations } from '../animations';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-layer-one',
    templateUrl: './layer-one.component.html',
    styleUrls: ['./layer-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        animations.layerRightMove
    ]
})
export class LayerOneComponent implements OnInit, OnDestroy {

    @HostBinding('class.app-layer')
    get appLayerClass(): boolean {
        return true;
    }

    @HostBinding('class.app-layer-one')
    get appLayerOneClass(): boolean {
        return true;
    }

    @HostBinding('class.app-right-layer')
    get appRightLayerClass(): boolean {
        return true;
    }

    @HostBinding('@layerRightMove')
    get layerRightMoveAnimation(): number {
        return this.currentLayer > 0 ?
            this.currentLayer - this.layerNum : 0;
    }

    private readonly layerNum: number;
    private currentLayer: number;
    private currentLayerSub: Subscription;

    constructor( private appService: AppService,
                 private cdRef: ChangeDetectorRef ) {
        this.layerNum = 1;
    }

    public ngOnInit() {
        this.currentLayerSub = this.appService.currentLayer$
            .subscribe(( value ) => {
                this.currentLayer = value;
                this.cdRef.markForCheck();
            });
    }

    public ngOnDestroy(): void {
        this.currentLayerSub.unsubscribe();
    }

    public handleClickOnAnchor( path: any, event: any ): void {
        this.appService.navigateTo(path, 2); // the '2' is harding coding for demonstration
        event.preventDefault();
    }
}
