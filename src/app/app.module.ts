import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteProxyComponent } from './route-proxy/route-proxy.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';

@NgModule({
    declarations: [
        AppComponent,
        RouteProxyComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
