import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Exchange} from "../models/exchange";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  readonly baseUrl :string = environment.baseURI;
  constructor(private http: HttpClient) { }


  getListByFilter(date?: string) : Promise<Array<Exchange>> {
    const filter = date? `/${date}` : ``;
    return this.http.get<Array<Exchange>>(this.baseUrl + filter + '/?format=json' ).toPromise()
  }
}
