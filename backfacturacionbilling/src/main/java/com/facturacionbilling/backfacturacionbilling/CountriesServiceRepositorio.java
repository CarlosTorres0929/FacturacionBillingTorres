
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
/**
 *
 * @author juanmogm
 */
public interface CountriesServiceRepositorio {
    
     // declarar los metodos como es con sprint
    Countries save(Countries cs);
    List<Countries>findAll();
    Countries findOne(int id);
    void delete(Countries cs);
}
