import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { bill_states } from 'src/app/Modelo/bill_states';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentbill_states.html',
  styleUrls: ['./add.componentbill_states.css']
})
export class AddComponentbill_states implements OnInit {
  //Crear instancia del modelo
  BillStates:bill_states=new bill_states();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo CreateBillStates de la class ServiceService
  Guardar(){
    this.service.createBillstates(this.BillStates)
    .subscribe(data=>{
      alert("Estado de cuenta Registrado");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}