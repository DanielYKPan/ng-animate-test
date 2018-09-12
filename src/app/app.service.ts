/**
 * app.service
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AppService {

    // TODO: this is harding coding for demonstration. We need to detect the current layer number when the page is loaded
    private currentLayer = 0;
    private currentLayerSubject = new Subject<number>();

    get currentLayer$(): Observable<number> {
        return this.currentLayerSubject.asObservable();
    }

    constructor( private router: Router ) {
    }

    public navigateTo( path: any, layerNum: number ): void {
        this.currentLayer = layerNum;
        this.currentLayerSubject.next(this.currentLayer);
        this.router.navigate(path);
    }

    // TODO: this is harding coding for demonstration. We need to detect the previous url in order to navigate back to previous route.
    public navigateBack(): void {
        switch (this.currentLayer) {

            case 3:
                this.currentLayer = 2;
                this.currentLayerSubject.next(this.currentLayer);
                this.router.navigate([{outlets: {'popup-two': ['layer-two'], 'popup-three': null}}]);
                break;

            case 2:
                this.currentLayer = 1;
                this.currentLayerSubject.next(this.currentLayer);
                this.router.navigate([{outlets: {'popup-one': ['layer-one'], 'popup-two': null}}]);
                break;

            case 1:
                this.currentLayer = 0;
                this.currentLayerSubject.next(this.currentLayer);
                this.router.navigate(['/']);
                break;

            default:
                this.router.navigate(['/']);
                return;
        }
    }
}
