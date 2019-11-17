
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
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/backfacturacionbilling"})
public class BillsControlador {
   // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    BillsService service;
    
    @GetMapping
    public List<Bills>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public Bills agregar(@RequestBody Bills bl){
        return service.add(bl);
    }
    
    @GetMapping(path = {"/{id}"})
    public Bills listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Bills editar(@RequestBody Bills bl, @PathVariable("id")int id){
        bl.setId(id);
        return service.edit(bl);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Bills delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
