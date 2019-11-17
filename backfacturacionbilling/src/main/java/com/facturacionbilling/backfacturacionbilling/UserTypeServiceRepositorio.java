
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
/**
 *
 * @author Carlo Torres
 */
public interface UserTypeServiceRepositorio {
    
     // declarar los metodos como es con sprint
    UserType save(UserType ut);
    List<UserType>findAll();
    UserType findOne(int id);
    void delete(UserType ut);
}
