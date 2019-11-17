import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { user } from 'src/app/Modelo/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentuser.html',
  styleUrls: ['./listar.componentuser.css']
})
export class ListarComponent implements OnInit {

  User:user[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUser()
    .subscribe(
      data=>{
        this.User=data;
      }
    )
  }

  Editar(User:user):void{
    localStorage.setItem("id",User.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(User:user){
    this.service.deleteUser(User)
    .subscribe(data=>{
      this.User=this.User.filter(us=>us!==User);
      alert("Usuario eliminado...");
    })
  }
}