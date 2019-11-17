
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
/**
 *
 * @author Carlos Torres
 */
// Referencia al proyecto Front-end
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/backfacturacionbilling"})
public class UserTypeControlador {
    
    // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    UserTypeService service;
    
    @GetMapping
    public List<UserType>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public UserType agregar(@RequestBody UserType ut){
        return service.add(ut);
    }
    
    @GetMapping(path = {"/{id}"})
    public UserType listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public UserType editar(@RequestBody UserType ut, @PathVariable("id")int id){
        ut.setId(id);
        return service.edit(ut);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public UserType delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
