import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { countries } from 'src/app/Modelo/countries';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentcountries.html',
  styleUrls: ['./edit.componentcountries.css']
})
export class EditComponentcountries implements OnInit {
  Countries:countries=new countries();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); //el id viene del archivo listar.component.ts

  //actualizar sus datos
  this.service.getCountriesId(+id)
  .subscribe(data=>{
    this.Countries=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(Countries:countries){
  this.service.updatecountries(Countries)
  .subscribe(data=>{
    this.Countries=data;
    alert("pais Actualizado");
    this.router.navigate(["listar"]);
  })
}
}
