import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { countries } from 'src/app/Modelo/countries';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentcountries.html',
  styleUrls: ['./listar.componentcountries.css']
})
export class ListarComponentcountries implements OnInit {

  Countries:countries[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getCountries()
    .subscribe(
      data=>{
        this.Countries=data;
      }
    )
  }

  Editar(Countries:countries):void{
    localStorage.setItem("id",Countries.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(Countries:countries){
    this.service.deleteCountries(Countries)
    .subscribe(data=>{
      this.Countries=this.Countries.filter(cs=>cs!==Countries);
      alert("Pais eliminado...");
    })
  }
}