
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */

@Service
public class ArticlesServicesServiceRepoImplements implements ArticlesServicesService{
    @Autowired
    private ArticlesServicesServiceRepositorio repositorio;
    
    @Override
    public List<ArticlesServices> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public ArticlesServices listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public ArticlesServices add(ArticlesServices as){
        return repositorio.save(as);
    }
    
    
    @Override
    public ArticlesServices edit(ArticlesServices as){
        return repositorio.save(as);
    }
    
    
    @Override
    public ArticlesServices delete(int id){
        ArticlesServices as = repositorio.findOne(id);
        
        if(as != null){
                repositorio.delete(as);
        }
            return as;
        
       
    }
    
}
