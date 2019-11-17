
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;

/**
 *
 * @author Carlos Torres Montoya
 */
public interface UserServiceRepositorio {

    // declarar los metodos como es con sprint
    User save(User us);
    List<User>findAll();
    User findOne(int id);
    void delete(User us);
    
    
    
    
    
}
