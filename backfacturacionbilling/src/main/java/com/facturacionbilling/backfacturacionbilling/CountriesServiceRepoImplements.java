
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juanmogm
 */
@Service

public class CountriesServiceRepoImplements implements CountriesService{
 
    @Autowired
    private CountriesServiceRepositorio repositorio;
    
    @Override
    public List<Countries> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public Countries listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public Countries add(Countries cs){
        return repositorio.save(cs);
    }
    
    
    @Override
    public Countries edit(Countries cs){
        return repositorio.save(cs);
    }
    
    
    @Override
    public Countries delete(int id){
        Countries cs = repositorio.findOne(id);
        
        if(cs != null){
                repositorio.delete(cs);
        }
            return cs;
        
       
    }
    
}
