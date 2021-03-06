import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
