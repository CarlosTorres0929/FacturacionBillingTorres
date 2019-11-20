import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { orders } from 'src/app/Modelo/orders';

@Component({
  selector: 'app-add',
  templateUrl: './add.componentorders.html',
  styleUrls: ['./add.componentorders.css']
})
export class AddComponentorders implements OnInit {
  //Crear instancia del modelo
  Orders:orders=new orders();

  //Crear parametros router y service en el constructor

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  //Metodo guardar que utiliza el metodo CreateOrders de la class ServiceService
  Guardar(){
    this.service.createOrders(this.Orders)
    .subscribe(data=>{
      alert("pedido Registrada");
      //Luego navegar hacia el componente listar
      this.router.navigate(["listar"]);
    })
  }

}