
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Carlos Torres
 */
@Service
public class BillStatesServiceRepoImplements implements BillStatesService{
     @Autowired
    private BillStatesServiceRepositorio repositorio;
    
    @Override
    public List<BillStates> listar(){
        return repositorio.findAll();
    }
    
    @Override
    public BillStates listarId(int id){
        return repositorio.findOne(id);
    }
    
    
    @Override
    public BillStates add(BillStates bs){
        return repositorio.save(bs);
    }
    
    
    @Override
    public BillStates edit(BillStates bs){
        return repositorio.save(bs);
    }
    
    
    @Override
    public BillStates delete(int id){
        BillStates bs = repositorio.findOne(id);
        
        if(bs != null){
                repositorio.delete(bs);
        }
            return bs;
        
       
    }
    
}
