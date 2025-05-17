import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   isAuthenticated : boolean = false;
   roles : any;
   username : any;


  constructor(private http:HttpClient) { }
  public login(username:string , password :string){
    let options = {
      headers:new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded"),
    }
    let params=new HttpParams()
      .set("username", username)
    .set("password", password);
    return this.http.post("http://localhost:8085/auth/login" , params, options)
  }

  loadProfile(data: any) {

    let jwtToken = data['access-token'];
  }
}
