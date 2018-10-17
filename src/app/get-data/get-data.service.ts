import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) {}

  callApi(term : string, url : string) {
    return this.http.get(url + term);
  }

}
