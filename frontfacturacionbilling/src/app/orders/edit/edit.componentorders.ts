import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { orders } from 'src/app/Modelo/orders';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.componentorders.html',
  styleUrls: ['./edit.componentorders.css']
})
export class EditComponentorders implements OnInit {
  Orders:orders=new orders();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }
//Metodo para editar el id recibido
Editar(){
  let id=localStorage.getItem("id"); 

  //actualizar sus datos
  this.service.getOrdersId(+id)
  .subscribe(data=>{
    this.Orders=data;
  })
}

//Metodo para actualizar(guardar) los cambios
Actualizar(Orders:orders){
  this.service.updateOrders(Orders)
  .subscribe(data=>{
    this.Orders=data;
    alert("pedido Actualizada");
    this.router.navigate(["listar"]);
  })
}
}
