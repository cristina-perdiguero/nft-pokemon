import { Component, OnInit , AfterViewInit} from '@angular/core';
import { PokeApiService } from 'src/app/shared/services/api/poke-api.service';
import { Nft } from '../../../../data/interfaces/nft.model';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
  nftList : Nft[] = []
  loader : boolean = true
  constructor(
    private pokeApi : PokeApiService
  ){}

  ngOnInit(): void {
    this.getNft()
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.loader = false
    }, 1000);
  }

  getNft(){
    this.nftList = this.pokeApi.getNftList()
  }

}
