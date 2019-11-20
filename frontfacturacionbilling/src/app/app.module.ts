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
import { ListarComponentcountries } from './countries/listar/listar.componentcountries';
import { AddComponentcountries } from './countries/add/add.componentcountries';
import { EditComponentcountries } from './countries/edit/edit.componentcountries';
import { ListarComponentcities } from './cities/listar/listar.componentcities';
import { AddComponentcities } from './cities/add/add.componentcities';
import { EditComponentcities } from './cities/edit/edit.componentcities';
import { ListarComponentbill_states } from './bill_states/listar/listar.componentbill_states';
import { AddComponentbill_states } from './bill_states/add/add.componentbill_states';
import { EditComponentbill_states } from './bill_states/edit/edit.componentbill_states';
import { ListarComponentbill } from './bill/listar/listar.componentbill';
import { AddComponentbill } from './bill/add/add.componentbill';
import { EditComponentbill } from './bill/edit/edit.componentbill';
import { ListarComponentorders } from './orders/listar/listar.componentorders';
import { AddComponentorders } from './orders/add/add.componentorders';
import { EditComponentorders } from './orders/edit/edit.componentorders';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ListarComponenttypeuser,
    AddComponenttypeuser,
    EditComponentusertype,
    ListarComponentcountries,
    AddComponentcountries,
    EditComponentcountries,
    ListarComponentcities,
    AddComponentcities,
    EditComponentcities,
    ListarComponentbill_states,
    AddComponentbill_states,
    EditComponentbill_states,
    ListarComponentbill,
    AddComponentbill,
    EditComponentbill,
    ListarComponentorders,
    AddComponentorders,
    EditComponentorders
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
