import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NftCardComponent } from './components/nft-card/nft-card.component';
import { NftListComponent } from './components/nft-list/nft-list.component';
import { NftRoutingModule } from './nft-routing.module';
import { MftLoaderComponent } from './components/mft-loader/mft-loader.component';
@NgModule({
  declarations: [
    NftCardComponent,
    NftListComponent,
    MftLoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NftRoutingModule
  ]
})
export class NftModule { }
