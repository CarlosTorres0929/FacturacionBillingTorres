
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;

/**
 *
 * @author Carlos Torres
 */
public interface OrdersServiceRepositorio {
        // declarar los metodos como es con sprint
    Orders save(Orders or);
    List<Orders>findAll();
    Orders findOne(int id);
    void delete(Orders or);
}
