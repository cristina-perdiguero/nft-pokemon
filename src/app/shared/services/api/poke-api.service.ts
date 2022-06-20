import { Injectable } from '@angular/core';
import { Nft } from '../../../data/interfaces/nft.model';
import { apiData } from '../../../data/constants/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pokemonList } from 'src/app/data/constants/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private BASE_URL  = apiData.baseUrl
  private pokemonListUrl = apiData.pokemonList
  private list = pokemonList
  nftList : Nft[] = [];

  constructor(
    private http : HttpClient
  ){ }

  private pokemon(url : string):Observable<any>{
    return this.http.get(url)
  }

  private getNewNft( data : any){
    let nft : Nft = {
      image       : data.image,
      type        : data.type,
      number      : data.number,
      name        : data.name,
      stats       : data.stats,
      height      : data.height,
      weight      : data.weight,
      moves       : data.moves,
      description : null
    }
    this.nftList.push(nft)
  }

  public getNftList(){
    this.list.forEach( (pokemon : string)=>{
      let url = `${this.BASE_URL}${this.pokemonListUrl}/${pokemon}`
      console.log(pokemon)
        this.pokemon( url ).subscribe(
          pokemonData=> {
            this.getNewNft(
              {
                image  : pokemonData.sprites.front_default,
                name   : pokemonData.name,
                number : pokemonData.order,
                height : pokemonData.height,
                weight : pokemonData.weight,
                type   : pokemonData.types,
                stats  : pokemonData.stats,
                moves  : pokemonData.moves
              }
            )
          }
        )
    })
    return this.nftList
  }
}
