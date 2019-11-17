
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
public class CountriesControlador {
    
    // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    CountriesService service;
    
    @GetMapping
    public List<Countries>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public Countries agregar(@RequestBody Countries cs){
        return service.add(cs);
    }
    
    @GetMapping(path = {"/{id}"})
    public Countries listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Countries editar(@RequestBody Countries cs, @PathVariable("id")int id){
        cs.setId(id);
        return service.edit(cs);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Countries delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
