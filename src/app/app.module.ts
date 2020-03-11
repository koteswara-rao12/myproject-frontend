import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import {ReactiveFormsModule} from '@angular/forms';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';


export const routes : Routes=[
  {path: '',component: HomeComponent, pathMatch:  'full'},
    {path: 'list', component: ListComponent, pathMatch:  'full'},
    {path: 'home', component: HomeComponent, pathMatch:  'full'},
  {path: 'add', component: AddComponent,},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
