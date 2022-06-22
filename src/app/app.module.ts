import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NftLayoutComponent } from './layout/nft-layout/nft-layout.component';
import { NavComponent } from './layout/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NftLayoutComponent,
    NavComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
