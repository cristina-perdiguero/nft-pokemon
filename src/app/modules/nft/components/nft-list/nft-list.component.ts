import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokeApiService } from 'src/app/shared/services/api/poke-api.service';
import { Nft } from '../../../../data/interfaces/nft.model';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit {
  nftList : Nft[] = []
  constructor(
    private pokeApi : PokeApiService
  ){}

  ngOnInit(): void {
    this.getNft()
  }

  getNft(){
    this.nftList = this.pokeApi.getNftList()
  }

}
