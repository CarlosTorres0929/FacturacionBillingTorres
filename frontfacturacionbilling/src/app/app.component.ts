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
@Component({
  selector: 'app-root',
  templateUrl: './app.componentcountries.html',
  styleUrls: ['./app.componentcountries.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.componentcities.html',
  styleUrls: ['./app.componentcities.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.componentbill_states.html',
  styleUrls: ['./app.componentbill_states.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.componentbill.html',
  styleUrls: ['./app.componentbill.css']
})
@Component({
  selector: 'app-root',
  templateUrl: './app.componentorders.html',
  styleUrls: ['./app.componentorders.css']
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



