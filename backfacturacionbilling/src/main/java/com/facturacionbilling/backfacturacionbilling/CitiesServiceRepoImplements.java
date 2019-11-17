
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */
@Service
public class CitiesServiceRepoImplements implements CitiesService{
    @Autowired
    private CitiesServiceRepositorio repositorio;
    
    @Override
    public List<Cities> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public Cities listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public Cities add(Cities ct){
        return repositorio.save(ct);
    }
    
    
    @Override
    public Cities edit(Cities ct){
        return repositorio.save(ct);
    }
    
    
    @Override
    public Cities delete(int id){
        Cities ct = repositorio.findOne(id);
        
        if(ct != null){
                repositorio.delete(ct);
        }
            return ct;
        
       
    }
    
}
