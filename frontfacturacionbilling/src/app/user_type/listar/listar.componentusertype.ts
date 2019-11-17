import { Component, OnInit } from '@angular/core';
import { user_type } from 'src/app/Modelo/user_type';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentusertype.html',
  styleUrls: ['./listar.componentusertype.css']
})
export class ListarComponenttypeuser implements OnInit {
  Usertype:user_type[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUsertype()
    .subscribe(
      data=>{
        this.Usertype=data;
      }
    )
  }

  Editar(Usertype:user_type):void{
    localStorage.setItem("id",Usertype.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(Usertype:user_type){
    this.service.deleteUsertype(Usertype)
    .subscribe(data=>{
      this.Usertype=this.Usertype.filter(us=>us!==Usertype);
      alert("Tipo de Usuario eliminado...");
    })
  }
}