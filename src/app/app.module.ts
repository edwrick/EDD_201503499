import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms'
import {RouterModule,Route} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {AboutComponent} from './about/about.component';
import { HelloWorld } from './firstComp/first.Comp';
import {DataService} from './data.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HelloWorld,
    AboutComponent,
    LoginComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'app',
        component:AppComponent
      },
      
        {path:'login',
        component:LoginComponent
      },
        {path:'admin',
        component:AdminComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
