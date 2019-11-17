import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './user/listar/listar.componentuser';
import { AddComponent } from './user/add/add.componentuser';
import { ListarComponenttypeuser } from './user_type/listar/listar.componentusertype';
import { AddComponenttypeuser } from './user_type/add/add.componentusertype';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'listar', component:ListarComponenttypeuser},
  {path:'add', component:AddComponenttypeuser},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
