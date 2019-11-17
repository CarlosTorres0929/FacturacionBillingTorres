
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
public class OrdersControlador {
    
     // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    OrdersService service;
    
    @GetMapping
    public List<Orders>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public Orders agregar(@RequestBody Orders or){
        return service.add(or);
    }
    
    @GetMapping(path = {"/{id}"})
    public Orders listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Orders editar(@RequestBody Orders or, @PathVariable("id")int id){
        or.setId(id);
        return service.edit(or);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Orders delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
