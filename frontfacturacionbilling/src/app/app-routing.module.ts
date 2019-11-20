import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './user/listar/listar.componentuser';
import { AddComponent } from './user/add/add.componentuser';
import { ListarComponenttypeuser } from './user_type/listar/listar.componentusertype';
import { AddComponenttypeuser } from './user_type/add/add.componentusertype';
import { ListarComponentcountries } from './countries/listar/listar.componentcountries';
import { AddComponentcountries } from './countries/add/add.componentcountries';
import { ListarComponentcities } from './cities/listar/listar.componentcities';
import { AddComponentcities } from './cities/add/add.componentcities';
import { ListarComponentbill_states } from './bill_states/listar/listar.componentbill_states';
import { AddComponentbill_states } from './bill_states/add/add.componentbill_states';
import { ListarComponentbill } from './bill/listar/listar.componentbill';
import { AddComponentbill } from './bill/add/add.componentbill';
import { ListarComponentorders } from './orders/listar/listar.componentorders';
import { AddComponentorders } from './orders/add/add.componentorders';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'listar', component:ListarComponenttypeuser},
  {path:'add', component:AddComponenttypeuser},
  {path:'listar', component:ListarComponentcountries},
  {path:'add', component:AddComponentcountries},
  {path:'listar', component:ListarComponentcities},
  {path:'add', component:AddComponentcities},
  {path:'listar', component:ListarComponentbill_states},
  {path:'add', component:AddComponentbill_states},
  {path:'listar', component:ListarComponentbill},
  {path:'add', component:AddComponentbill}
  {path:'listar', component:ListarComponentorders},
  {path:'add', component:AddComponentorders}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
