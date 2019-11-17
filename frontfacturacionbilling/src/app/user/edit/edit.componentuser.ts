import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { user } from 'src/app/Modelo/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentuser.html',
  styleUrls: ['./edit.componentuser.css']
})
export class EditComponent implements OnInit {
  User:user=new user();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); //el id viene del archivo listar.component.ts

  //actualizar sus datos
  this.service.getUserId(+id)
  .subscribe(data=>{
    this.User=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(User:user){
  this.service.updateuser(User)
  .subscribe(data=>{
    this.User=data;
    alert("usuario Actualizado");
    this.router.navigate(["listar"]);
  })
}
}
