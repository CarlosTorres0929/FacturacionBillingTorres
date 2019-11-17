
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */

@Service
public class OrdersServiceRepoImplements implements OrdersService{
    
     @Autowired
    private OrdersServiceRepositorio repositorio;
    
    @Override
    public List<Orders> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public Orders listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public Orders add(Orders or){
        return repositorio.save(or);
    }
    
    
    @Override
    public Orders edit(Orders or){
        return repositorio.save(or);
    }
    
    
    @Override
    public Orders delete(int id){
        Orders or = repositorio.findOne(id);
        
        if(or != null){
                repositorio.delete(or);
        }
            return or;
        
       
    }
    
}
