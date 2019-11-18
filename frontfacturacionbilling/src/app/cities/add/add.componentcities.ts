import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { cities } from 'src/app/Modelo/cities';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentcities.html',
  styleUrls: ['./add.componentcities.css']
})
export class AddComponentcities implements OnInit {
  //Crear instancia del modelo
  Cities:cities=new cities();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo CreateCities de la class ServiceService
  Guardar(){
    this.service.createCities(this.Cities)
    .subscribe(data=>{
      alert("ciudad Registrada");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}