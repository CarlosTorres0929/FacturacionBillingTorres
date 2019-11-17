import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../Modelo/user';
import { user_type } from '../Modelo/user_type'
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
// Luego ir al archivo listar.component.ts para crear el metod Editar() que se invoca en el formulario del archivo listar.component.html

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
// Luego ir al archivo listar.component.ts para crear el metod Editar() que se invoca en el formulario del archivo listar.component.html

}
