
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */
@Service

public class UserServiceRepoImplements implements UserService{

    @Autowired
    private UserServiceRepositorio repositorio;
    
    @Override
    public List<User> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public User listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public User add(User us){
        return repositorio.save(us);
    }
    
    
    @Override
    public User edit(User us){
        return repositorio.save(us);
    }
    
    
    @Override
    public User delete(int id){
        User us = repositorio.findOne(id);
        
        if(us != null){
                repositorio.delete(us);
        }
            return us;
        
       
    }
    
}
