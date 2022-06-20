import { Injectable } from '@angular/core';
import { Nft } from '../../../data/interfaces/nft.model';
import { apiData } from '../../../data/constants/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private BASE_URL  = apiData.baseUrl
  private pokemonListUrl = apiData.pokemonList

  nftList : Nft[] = [];

  constructor(
    private http : HttpClient
  ){ }

  private pokemonList():Observable<any>{
    let url = this.BASE_URL + this.pokemonListUrl
    return this.http.get(url)
  }

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
    this.pokemonList().subscribe(
      list =>{
        list.results.forEach((pokemon : any )=> {
          this.pokemon( pokemon.url ).subscribe(
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
        });
      }
    )
    return this.nftList
  }
}
