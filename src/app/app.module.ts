import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';
import { ForIfComponent } from './for-if/for-if.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './about-container/table/table.component';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    AboutContainerComponent,
    ForIfComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
