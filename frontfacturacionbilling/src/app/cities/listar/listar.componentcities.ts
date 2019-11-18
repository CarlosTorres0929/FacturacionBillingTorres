import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { cities } from 'src/app/Modelo/cities';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.componentcities.html',
  styleUrls: ['./listar.componentcities.css']
})
export class ListarComponentcities implements OnInit {

  Cities:cities[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getCities()
    .subscribe(
      data=>{
        this.Cities=data;
      }
    )
  }

  Editar(Cities:cities):void{
    localStorage.setItem("id",Cities.id.toString()); 
    this.router.navigate(['edit']);  
  }

  Delete(Cities:cities){
    this.service.deleteCities(Cities)
    .subscribe(data=>{
      this.Cities=this.Cities.filter(ct=>ct!==Cities);
      alert("Ciudad eliminada...");
    })
  }
}