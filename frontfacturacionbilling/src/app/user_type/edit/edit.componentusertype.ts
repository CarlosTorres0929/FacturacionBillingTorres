import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { user_type } from 'src/app/Modelo/user_type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentusertype.html',
  styleUrls: ['./edit.componentusertype.css']
})
export class EditComponentusertype implements OnInit {

  Usertype:user_type=new user_type();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); //el id viene del archivo listar.component.ts

  //actualizar sus datos
  this.service.getUsertypeId(+id)
  .subscribe(data=>{
    this.Usertype=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(User:user_type){
  this.service.updateusertype(this.Usertype)
  .subscribe(data=>{
    this.Usertype=data;
    alert("Tipo usuario Actualizado");
    this.router.navigate(["listar"]);
  })
}
}
