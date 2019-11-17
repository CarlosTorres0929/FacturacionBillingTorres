
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
public class BillStatesControlador {
 // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    BillStatesService service;
    
    @GetMapping
    public List<BillStates>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public BillStates agregar(@RequestBody BillStates bs){
        return service.add(bs);
    }
    
    @GetMapping(path = {"/{id}"})
    public BillStates listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public BillStates editar(@RequestBody BillStates bs, @PathVariable("id")int id){
        bs.setId(id);
        return service.edit(bs);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public BillStates delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
