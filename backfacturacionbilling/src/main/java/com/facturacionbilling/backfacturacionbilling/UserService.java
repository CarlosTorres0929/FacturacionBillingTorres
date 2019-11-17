
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author carlos torres
 */
public interface UserService extends Repository<User, Integer>{
    
    // metodos para el crud

    User add(User us);
    List<User>listar();
    User listarId(int id);
    User edit(User us);
    User delete(int id);
}
