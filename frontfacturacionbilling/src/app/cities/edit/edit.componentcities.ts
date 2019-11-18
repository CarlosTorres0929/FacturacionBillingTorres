import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { cities } from 'src/app/Modelo/cities';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentcities.html',
  styleUrls: ['./edit.componentcities.css']
})
export class EditComponentcities implements OnInit {
  Cities:cities=new cities();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); //el id viene del archivo listar.componentcities.ts

  //actualizar sus datos
  this.service.getCitiesId(+id)
  .subscribe(data=>{
    this.Cities=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(Cities:cities){
  this.service.updateCities(Cities)
  .subscribe(data=>{
    this.Cities=data;
    alert("Ciudad Actualizado");
    this.router.navigate(["listar"]);
  })
}
}
