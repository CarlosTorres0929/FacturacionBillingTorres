
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
public class CitiesControlador {
   // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    CitiesService service;
    
    @GetMapping
    public List<Cities>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public Cities agregar(@RequestBody Cities ct){
        return service.add(ct);
    }
    
    @GetMapping(path = {"/{id}"})
    public Cities listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Cities editar(@RequestBody Cities ct, @PathVariable("id")int id){
        ct.setId(id);
        return service.edit(ct);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Cities delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
