
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author juanmogm
 */
public interface UserTypeService extends Repository<UserType, Integer>{
    
    
     // metodos para el crud

    UserType add(UserType ut);
    List<UserType>listar();
    UserType listarId(int id);
    UserType edit(UserType ut);
    UserType delete(int id);
}
