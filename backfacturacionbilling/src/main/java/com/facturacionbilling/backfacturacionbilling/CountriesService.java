
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Carlos Torres
 */
public interface CountriesService extends Repository<Countries, Integer>{
    
      // metodos para el crud

    Countries add(Countries cs);
    List<Countries>listar();
    Countries listarId(int id);
    Countries edit(Countries cs);
    Countries delete(int id);
    
}
