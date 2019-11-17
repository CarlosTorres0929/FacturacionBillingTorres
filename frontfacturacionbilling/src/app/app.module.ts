import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarComponent } from './user/listar/listar.componentuser';
import { AddComponent } from './user/add/add.componentuser';
import { EditComponent } from './user/edit/edit.componentuser';
import { ListarComponenttypeuser } from './user_type/listar/listar.componentusertype';
import { AddComponenttypeuser } from './user_type/add/add.componentusertype';
import { EditComponentusertype } from './user_type/edit/edit.componentusertype';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarComponenttypeuser,
    AddComponenttypeuser,
    EditComponentusertype
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
