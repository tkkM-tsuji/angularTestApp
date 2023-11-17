import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ForIfComponent } from './for-if/for-if.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    AboutContainerComponent,
    ForIfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
