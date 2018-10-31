import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {DataService} from './data.service'
import {Post} from './Post'
import {enableProdMode} from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'<origin> | *', 
    'Access-Control-Allow-Credentials': 'True',
    'Content-Type':  'application/json'
  })
};


interface Helper{
  pet:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tempH: Helper={pet:""};
  tempU : Post={result:""};
  title = {}
  userName:string="";
  response:any;
  dataS:string;
  constructor(private httpClient: HttpClient,private http:DataService) {
    //enableProdMode();
    console.log('services is working!');
   }

   private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
   search(){
    return this.httpClient.get('http://localhost:9098/helloworld/getFortune')
    .subscribe((response )=>{
      this.response=response;
      console.log(this.response);
    } )
   }

   getPrueba(){
     return this.httpClient.get('http://localhost:8080/MavenServerEDD/resources/PrimerProyecto/')
     .subscribe((response )=>{
      this.response=response;
      console.log(this.response);
    } )
   }

   getResponse(){
    let params = new HttpParams().append("pet",this.userName);
    return this.httpClient.get('http://localhost:8080/MavenServerEDD/resources/PrimerProyecto/'+this.userName)
    .subscribe((response )=>{
     this.response=response;
     console.log(this.response);
   } )
    
  }
  getR(idk:Helper){
    
  }

   newPost():Observable<Post>{
    this.tempU.result= this.userName;
    console.log("Valor de result: "+this.tempU.result);
    let obs= this.httpClient.post<Post>('http://localhost:8080/MavenServerEDD/resources/PrimerProyecto/', this.tempU, httpOptions);
    obs.subscribe((response )=>{
      this.response=response;
      console.log(this.response);
    } );
    return obs;

   }


   addPost () {
    this.http.trans(this.userName);
  }

   getData(){
    return this.httpClient.get('http://localhost:9098/helloworld/getFortune')
   }

   
}




