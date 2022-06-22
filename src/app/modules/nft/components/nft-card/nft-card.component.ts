import { Component, Input, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { TypeApiService } from 'src/app/shared/services/api/type-api.service';
@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})
export class NftCardComponent implements OnInit {

  @Input() nft : any;
  typeClass : string = 'grass'

  constructor(
    private typeApi : TypeApiService
  ) { }

  ngOnInit(): void {
    this.typeApi.typeList$.subscribe(data=>{
      let number = Math.floor((Math.random() * (data.length - 0 + 1)) + 0);
      this.typeClass = data[number]
    })
  }

  ngAfterViewInit() {
    this.getBarWidth()
  }

  private getBarWidth(){
    let barList = document.querySelectorAll('.bars__bar')
    barList.forEach((bar : any)=>{
      let div = bar.querySelector('div')
      div.style.width = `${bar.getAttribute('data-base')}%`
    })
  }
  public getStatName( stat : string  ){
    let name;
    stat = stat.toLocaleLowerCase()
    switch (stat) {
      case 'hp':
        name = 'hp'
        break;
      case 'attack':
        name = 'atk'
        break;
      case 'defense':
        name = 'def'
        break;
      case 'special-attack':
        name = 'stak'
        break;
      case 'special-defense':
        name = 'sdef'
        break;
      case 'speed':
        name = 'spd'
        break;
      default:
        name = ''
        break;
    }
    return name
  }
}
