import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { bill } from 'src/app/Modelo/bill';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentbill.html',
  styleUrls: ['./add.componentbill.css']
})
export class AddComponentbill implements OnInit {
  //Crear instancia del modelo
  Bill:bill=new bill();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo CreateBillStates de la class ServiceService
  Guardar(){
    this.service.createBill(this.Bill)
    .subscribe(data=>{
      alert("cuenta Registrada");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}