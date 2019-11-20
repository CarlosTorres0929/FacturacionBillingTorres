import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { orders } from 'src/app/Modelo/orders';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentorders.html',
  styleUrls: ['./listar.componentorders.css']
})
export class ListarComponentorders implements OnInit {

  Orders:orders[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getOrders()
    .subscribe(
      data=>{
        this.Orders=data;
      }
    )
  }

  Editar(Orders:orders):void{
    localStorage.setItem("id",Orders.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(Orders:orders){
    this.service.deleteOrders(Orders)
    .subscribe(data=>{
      this.Orders=this.Orders.filter(bs=>bs!==Orders);
      alert("pedido eliminada...");
    })
  }
}