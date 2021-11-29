import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicSiteComponent } from './public-site/public-site.component';
import { PrivateSiteComponent } from './private-site/private-site.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicSiteComponent,
    PrivateSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
