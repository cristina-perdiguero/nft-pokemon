import { Injectable } from '@angular/core';
import { apiData } from 'src/app/data/constants/api';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TypeApiService {
  private BASE_URL = apiData.baseUrl
  private list = apiData.typeList
  private dataType : any;
  public typeList$ : BehaviorSubject<[]> = new BehaviorSubject([])

  constructor(
    private http : HttpClient
  ){
    this.getTypeList()
  }

  private types( url : string ){
    return this.http.get(url)
  }

  public getTypeList(){
    let url = `${this.BASE_URL}${this.list}`
    let list : string[] = []
    this.types( url ).subscribe(
      typeData=> {
        this.dataType = typeData
        this.dataType.results.forEach((type : any) => {
          list.push( type.name )
        });
        this.typeList = list
      }
    )
  }

  get typeList(){
    return this.typeList$.asObservable()
  }

  set typeList( list : any){
    this.typeList$.next( list)
  }
}
