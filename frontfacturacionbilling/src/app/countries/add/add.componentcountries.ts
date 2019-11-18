import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { countries } from 'src/app/Modelo/countries';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentcountries.html',
  styleUrls: ['./add.componentcountries.css']
})
export class AddComponentcountries implements OnInit {
  //Crear instancia del modelo
  Countries:countries=new countries();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo createcountries de la class ServiceService
  Guardar(){
    this.service.createCountries(this.Countries)
    .subscribe(data=>{
      alert("pais Registrado");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}