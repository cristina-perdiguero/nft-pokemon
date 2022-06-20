import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftLayoutComponent } from './layout/nft-layout/nft-layout.component';
const routes: Routes = [
  {
    path : '',
    component : NftLayoutComponent,
    children : [
      {
        path : '',
        loadChildren : ()=> import ('./modules/nft/nft.module').then((m)=> m.NftModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
