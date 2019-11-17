import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { user_type } from 'src/app/Modelo/user_type';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentusertype.html',
  styleUrls: ['./add.componentusertype.css']
})
export class AddComponenttypeuser implements OnInit {
  //Crear instancia del modelo
  Usertype:user_type=new user_type();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo createUsertype de la class ServiceService
  Guardar(){
    this.service.createUsertype(this.Usertype)
    .subscribe(data=>{
      alert("Tipo de Usuario Registrado");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}
