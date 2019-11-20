import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Modelo/user';
import { user_type } from '../Modelo/user_type'
import { countries } from '../Modelo/countries';
import { cities } from '../Modelo/cities';
import { bill_states } from '../Modelo/bill_states';
import { bill } from '../Modelo/bill';
import { orders } from '../Modelo/orders';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) { }
  //Url del proyecto back
  Url='http://localhost:8080/FacturacionBillingTorres';

  // Metodos para la tabla user
  //Metodo para listar los usuarios desde el project back
  getUser(){
    return this.http.get<user[]>(this.Url);
  }
  //Metodo para guardar los registros
  createUser(User:user){
    return this.http.post<user>(this.Url,User);
  }
  // Este metodo toma el id que se requiere actualizar los Usuarios
  getUserId(id:number){
    return this.http.get<user>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar los usuarios
  updateuser(User:user){
    return this.http.put<user>(this.Url+"/"+User.id,User);
  }
  //Metodo para eliminar usuarios
  deleteUser(User:user){
    return this.http.delete<user>(this.Url+"/"+User.id);
  }


// Metodos para la tabla user_type
 //Metodo para listar los tipos de usuarios desde el project back
 getUsertype(){
  return this.http.get<user_type[]>(this.Url);
}
//Metodo para guardar los registros
createUsertype(Usertype:user_type){
  return this.http.post<user_type>(this.Url,Usertype);
}
// Este metodo toma el id que se requiere actualizar los tipos de usuarios
getUsertypeId(id:number){
  return this.http.get<user_type>(this.Url+"/"+id);
}
// estes es el metodo para actualizar los tipos de usuarios
updateusertype(Usertype:user_type){
  return this.http.put<user_type>(this.Url+"/"+Usertype.id,Usertype);
}
//Metodo para eliminar tipos de usuarios
deleteUsertype(Usertype:user_type){
  return this.http.delete<user_type>(this.Url+"/"+Usertype.id);
}

// Metodos para la tabla countries
  //Metodo para listar los paises desde el project back
  getCountries(){
    return this.http.get<countries[]>(this.Url);
  }
  //Metodo para guardar los registros
  createCountries(Countries:countries){
    return this.http.post<countries>(this.Url,Countries);
  }
  // Este metodo toma el id que se requiere actualizar los paises
  getCountriesId(id:number){
    return this.http.get<countries>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar los paises
  updatecountries(Countries:countries){
    return this.http.put<countries>(this.Url+"/"+Countries.id,Countries);
  }
  //Metodo para eliminar paises
  deleteCountries(Countries:countries){
    return this.http.delete<countries>(this.Url+"/"+Countries.id);
  }

  // Metodos para la tabla ciudades
  //Metodo para listar las ciudades desde el project back
  getCities(){
    return this.http.get<cities[]>(this.Url);
  }
  //Metodo para guardar los registros
  createCities(Cities:cities){
    return this.http.post<cities>(this.Url,Cities);
  }
  // Este metodo toma el id que se requiere actualizar las ciudades
  getCitiesId(id:number){
    return this.http.get<cities>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar las ciudades
  updateCities(Cities:cities){
    return this.http.put<cities>(this.Url+"/"+Cities.id,Cities);
  }
  //Metodo para eliminar ciudades
  deleteCities(Cities:cities){
    return this.http.delete<cities>(this.Url+"/"+Cities.id);
  }

  // Metodos para la tabla estados de cuenta
  //Metodo para listar los estados de cuenta desde el project back
  getBillstates(){
    return this.http.get<bill_states[]>(this.Url);
  }
  //Metodo para guardar los registros
  createBillstates(BillStates:bill_states){
    return this.http.post<bill_states>(this.Url,BillStates);
  }
  // Este metodo toma el id que se requiere actualizar los Usuarios
  getBillstatesId(id:number){
    return this.http.get<bill_states>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar los usuarios
  updateBillstates(BillStates:bill_states){
    return this.http.put<bill_states>(this.Url+"/"+BillStates.id,BillStates);
  }
  //Metodo para eliminar usuarios
  deleteBillstates(BillStates:bill_states){
    return this.http.delete<bill_states>(this.Url+"/"+BillStates.id);
  }

// Metodos para la tabla cuenta
  //Metodo para listar cuenta desde el project back
  getBill(){
    return this.http.get<bill[]>(this.Url);
  }
  //Metodo para guardar los registros
  createBill(Bill:bill){
    return this.http.post<bill>(this.Url,Bill);
  }
  // Este metodo toma el id que se requiere actualizar las cuentas
  getBillId(id:number){
    return this.http.get<bill>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar las cuentas
  updateBill(Bill:bill){
    return this.http.put<bill>(this.Url+"/"+Bill.id,Bill);
  }
  //Metodo para eliminar cuentas
  deleteBill(Bill:bill){
    return this.http.delete<bill>(this.Url+"/"+Bill.id);
  }

// Metodos para la tabla pedidos
  //Metodo para listar el pedido desde el project back
  getOrders(){
    return this.http.get<orders[]>(this.Url);
  }
  //Metodo para guardar los registros
  createOrders(Orders:orders){
    return this.http.post<orders>(this.Url,Orders);
  }
  // Este metodo toma el id que se requiere actualizar los pedidos
  getOrdersId(id:number){
    return this.http.get<orders>(this.Url+"/"+id);
  }
  // estes es el metodo para actualizar las cuentas
  updateOrders(Orders:orders){
    return this.http.put<orders>(this.Url+"/"+Orders.id,Orders);
  }
  //Metodo para eliminar cuentas
  deleteOrders(Orders:orders){
    return this.http.delete<orders>(this.Url+"/"+Orders.id);
  }

}
