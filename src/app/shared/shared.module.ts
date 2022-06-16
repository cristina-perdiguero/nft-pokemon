import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';


@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    CommonModule,
    HttpClientModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
