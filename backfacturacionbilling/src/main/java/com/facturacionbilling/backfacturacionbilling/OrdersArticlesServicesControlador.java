
package com.facturacionbilling.backfacturacionbilling;

/**
 *
 * @author Carlos Torres
 */
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

// Referencia al proyecto Front-end
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/backfacturacionbilling"})
public class OrdersArticlesServicesControlador {
  // Se hara referencia al proyecto front-end brindandole los servicios
    
    @Autowired
    OrdersArticlesServiceService service;
    
    @GetMapping
    public List<OrdersArticlesServices>listar(){
        return service.listar();
    }
    
    @PostMapping
    // La anotacion @RequestBody deserializa el json
    public OrdersArticlesServices agregar(@RequestBody OrdersArticlesServices oa){
        return service.add(oa);
    }
    
    @GetMapping(path = {"/{id}"})
    public OrdersArticlesServices listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public OrdersArticlesServices editar(@RequestBody OrdersArticlesServices oa, @PathVariable("id")int id){
        oa.setId(id);
        return service.edit(oa);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public OrdersArticlesServices delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
