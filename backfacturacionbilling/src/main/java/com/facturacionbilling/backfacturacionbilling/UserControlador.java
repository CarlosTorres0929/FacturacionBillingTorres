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
public class UserControlador {
    
    // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    UserService service;
    
    @GetMapping
    public List<User>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public User agregar(@RequestBody User us){
        return service.add(us);
    }
    
    @GetMapping(path = {"/{id}"})
    public User listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public User editar(@RequestBody User us, @PathVariable("id")int id){
        us.setId(id);
        return service.edit(us);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public User delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
