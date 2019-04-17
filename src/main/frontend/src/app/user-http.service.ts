import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import User from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  //private httpClient: HttpClient;

  constructor(private httpClient: HttpClient) {
    //this.httpClient = httpClient;
  }

  getUsersObservable(): Observable<User[]> {
    return this.httpClient.get<User[]>("api/users");
  }


}
