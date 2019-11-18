import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { bill_states } from 'src/app/Modelo/bill_states';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentbill_states.html',
  styleUrls: ['./listar.componentbill_states.css']
})
export class ListarComponentbill_states implements OnInit {

  BillStates:bill_states[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getBillstates()
    .subscribe(
      data=>{
        this.BillStates=data;
      }
    )
  }

  Editar(BillStates:bill_states):void{
    localStorage.setItem("id",BillStates.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(BillStates:bill_states){
    this.service.deleteBillstates(BillStates)
    .subscribe(data=>{
      this.BillStates=this.BillStates.filter(bs=>bs!==BillStates);
      alert("Estado de cuenta eliminado...");
    })
  }
}