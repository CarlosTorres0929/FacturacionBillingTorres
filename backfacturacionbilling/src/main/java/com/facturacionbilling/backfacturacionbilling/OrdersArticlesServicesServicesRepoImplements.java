
package com.facturacionbilling.backfacturacionbilling;

/**
 *
 * @author Carlos Torres
 */
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersArticlesServicesServicesRepoImplements implements OrdersArticlesServiceService{
    @Autowired
    private OrdersArticlesServicesServicesRepositorio repositorio;
    
    @Override
    public List<OrdersArticlesServices> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public OrdersArticlesServices listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public OrdersArticlesServices add(OrdersArticlesServices oa){
        return repositorio.save(oa);
    }
    
    
    @Override
    public OrdersArticlesServices edit(OrdersArticlesServices oa){
        return repositorio.save(oa);
    }
    
    
    @Override
    public OrdersArticlesServices delete(int id){
        OrdersArticlesServices oa = repositorio.findOne(id);
        
        if(oa != null){
                repositorio.delete(oa);
        }
            return oa;
        
       
    }
    
}

