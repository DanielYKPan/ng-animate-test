import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from '../animations';
import { AppService } from '../app.service';

@Component({
    selector: 'app-route-proxy',
    templateUrl: './route-proxy.component.html',
    styleUrls: ['./route-proxy.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        animations.layerSlide
    ]
})
export class RouteProxyComponent implements OnInit {


    @HostBinding('class.app-overlay')
    get appOverlayClass(): boolean {
        return true;
    }

    @HostBinding('@layerSlide')
    get layerSlideAnimation(): boolean {
        return true;
    }

    constructor( private router: Router,
                 private appService: AppService ) {
    }

    ngOnInit() {
    }

    public handleClickOnBackdrop( event: any ): void {
        this.appService.navigateBack();
        event.preventDefault();
    }
}
