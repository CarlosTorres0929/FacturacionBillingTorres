
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Carlos Torres
 */
public interface OrdersService extends Repository<Orders, Integer>{

    // metodos para el crud

    Orders add(Orders or);
    List<Orders>listar();
    Orders listarId(int id);
    Orders edit(Orders or);
    Orders delete(int id);
    
}
