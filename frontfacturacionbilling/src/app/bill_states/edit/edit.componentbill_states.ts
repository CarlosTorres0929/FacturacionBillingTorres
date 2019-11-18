import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { bill_states } from 'src/app/Modelo/bill_states';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentbill_states.html',
  styleUrls: ['./edit.componentbill_states.css']
})
export class EditComponentbill_states implements OnInit {
  BillStates:bill_states=new bill_states();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); 

  //actualizar sus datos
  this.service.getBillstatesId(+id)
  .subscribe(data=>{
    this.BillStates=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(BillStates:bill_states){
  this.service.updateBillstates(BillStates)
  .subscribe(data=>{
    this.BillStates=data;
    alert("Estado de cuenta Actualizado");
    this.router.navigate(["listar"]);
  })
}
}
