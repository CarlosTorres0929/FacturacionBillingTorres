import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { bill } from 'src/app/Modelo/bill';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentbill.html',
  styleUrls: ['./edit.componentbill.css']
})
export class EditComponentbill implements OnInit {
  Bill:bill=new bill();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); 

  //actualizar sus datos
  this.service.getBillId(+id)
  .subscribe(data=>{
    this.Bill=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(Bill:bill){
  this.service.updateBill(Bill)
  .subscribe(data=>{
    this.Bill=data;
    alert("cuenta Actualizada");
    this.router.navigate(["listar"]);
  })
}
}
