
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
/**
 *
 * @author Carlos Torres
 */
public interface CitiesServiceRepositorio {
    
        // declarar los metodos como es con sprint
    Cities save(Cities ct);
    List<Cities>findAll();
    Cities findOne(int id);
    void delete(Cities ct);
}
