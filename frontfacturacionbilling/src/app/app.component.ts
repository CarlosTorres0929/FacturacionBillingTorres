import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.componentuser.html',
  styleUrls: ['./app.componentuser.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.componentusertype.html',
  styleUrls: ['./app.componentusertype.css']
})
export class AppComponent {
  title = 'frontfacturacionbilling';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
}



