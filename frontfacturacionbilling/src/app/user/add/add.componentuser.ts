import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { user } from 'src/app/Modelo/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentuser.html',
  styleUrls: ['./add.componentuser.css']
})
export class AddComponent implements OnInit {
  //Crear instancia del modelo
  User:user=new user();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo createUser de la class ServiceService
  Guardar(){
    this.service.createUser(this.User)
    .subscribe(data=>{
      alert("Usuario Registrado");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}
