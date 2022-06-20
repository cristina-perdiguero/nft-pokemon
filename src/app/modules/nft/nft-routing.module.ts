import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftListComponent } from './components/nft-list/nft-list.component';
const routes: Routes = [
  {
    path : '',
    component : NftListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftRoutingModule { }
