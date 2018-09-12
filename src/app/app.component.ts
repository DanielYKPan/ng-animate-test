import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ng-animate-test';

    constructor( private appService: AppService ) {
    }

    public handleClickOnAnchor( path: any, event: any ): void {
        this.appService.navigateTo(path, 1); // the '1' is harding coding for demonstration
        event.preventDefault();
    }
}
