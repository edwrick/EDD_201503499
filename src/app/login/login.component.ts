import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {DataService} from '../data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:DataService) { }

  ngOnInit() {
  }

  loginUser(event){ 
    
    
    const target = event.target
    const user = target.querySelector('user').value
    const pswd = target.querySelector('pswd').value
    this.http.login(user,pswd)
    console.log(user, pswd)
  }

}
