import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable(
{
    providedIn:'root'
}
)


export class UserService{

    constructor(private http:HttpClient){}

    addUserInformation(loginInformation:User){
       return this.http.post("",loginInformation);
       
    }
}