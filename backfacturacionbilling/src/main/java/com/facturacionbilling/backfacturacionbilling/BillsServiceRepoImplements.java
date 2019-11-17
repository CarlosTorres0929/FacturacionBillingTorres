
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */
public class BillsServiceRepoImplements implements BillsService{
    @Autowired
    private BillsServiceRepositorio repositorio;
    
    @Override
    public List<Bills> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public Bills listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public Bills add(Bills bl){
        return repositorio.save(bl);
    }
    
    
    @Override
    public Bills edit(Bills bl){
        return repositorio.save(bl);
    }
    
    
    @Override
    public Bills delete(int id){
        Bills bl = repositorio.findOne(id);
        
        if(bl != null){
                repositorio.delete(bl);
        }
            return bl;
        
       
    }
    
}


