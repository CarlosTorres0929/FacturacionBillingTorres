
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
/**
 *
 * @author Carlos Torres
 */
public class UserTypeServiceRepoImplements  implements UserTypeService{
    
   @Autowired
    private UserTypeServiceRepositorio repositorio;
    
    @Override
    public List<UserType> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public UserType listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public UserType add(UserType ut){
        return repositorio.save(ut);
    }
    
    
    @Override
    public UserType edit(UserType ut){
        return repositorio.save(ut);
    }
    
    
    @Override
    public UserType delete(int id){
        UserType ut = repositorio.findOne(id);
        
        if(ut != null){
                repositorio.delete(ut);
        }
            return ut;
        
       
    }
    
}
