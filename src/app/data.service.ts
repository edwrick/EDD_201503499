import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Post} from './Post'
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {HttpClientModule} from '@angular/common/http'
const httpOptions = {
  headers: new HttpHeaders({
    
    'Access-Control-Allow-Origin':'<origin> | *',
    'Access-Control-Allow-Credentials': 'True',
    
    'Content-Type':  'application/json'
  })
  
};
interface userInterface{
  carnet:any;
  pswd:any
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  
  configUrl = 'assets/config.json';
  userInfo :userInterface={
    carnet:"",
    pswd:""
  }
  tempU : Post={result:""};
  post:Post={result:""};
  userName:string="";
  response:any;
  constructor(private httpClient: HttpClient) {
    console.log('services is working!');
   }


   getConfig() {
    return this.httpClient.get(this.configUrl);
  }

  trans(name:string){
    this.post.result=name;
    this.newPost(this.post);
  }

    newPost(usuario :Post):Observable<string>{
      let obs= this.httpClient.post<string>('http://localhost:8080/MavenServerEDD/resources/PrimerProyecto/', usuario, httpOptions);
      obs.subscribe((response )=>{
        this.response=response;
        console.log(this.response);
      } );
      return obs;

    }

    login (user,pswd):Observable<userInterface>{
      event.preventDefault()
      this.userInfo.carnet= user;
      this.userInfo.pswd= pswd;
      console.log("Valor de result: "+this.userInfo.carnet+" "+this.userInfo.pswd);
      let obs= this.httpClient.post<userInterface>('http://localhost:8080/mavenproject1/resources/PrimerProyecto/ingresar', this.userInfo, httpOptions);
      obs.subscribe((response )=>{
        this.response=response;
        console.log(this.response);
      } );
      return obs;
     }



   search(){
    this.httpClient.get('http://localhost:9098/helloworld/getFortune')
    .subscribe((response )=>{
      this.response=response;
      console.log(this.response);
    } )
   }
   getData(){
    return this.httpClient.get('http://localhost:9098/helloworld/getFortune')
   }
}
