import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { bill } from 'src/app/Modelo/bill';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentbill.html',
  styleUrls: ['./listar.componentbill.css']
})
export class ListarComponentbill implements OnInit {

  Bill:bill[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getBill()
    .subscribe(
      data=>{
        this.Bill=data;
      }
    )
  }

  Editar(Bill:bill):void{
    localStorage.setItem("id",Bill.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(Bill:bill){
    this.service.deleteBill(Bill)
    .subscribe(data=>{
      this.Bill=this.Bill.filter(bs=>bs!==Bill);
      alert("cuenta eliminada...");
    })
  }
}