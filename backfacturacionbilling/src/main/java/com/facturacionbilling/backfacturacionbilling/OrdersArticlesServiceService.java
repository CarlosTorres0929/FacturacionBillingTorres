
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Carlos Torres
 */
public interface OrdersArticlesServiceService extends Repository<OrdersArticlesServices, Integer>{
     // metodos para el crud

    OrdersArticlesServices add(OrdersArticlesServices oa);
    List<OrdersArticlesServices>listar();
    OrdersArticlesServices listarId(int id);
    OrdersArticlesServices edit(OrdersArticlesServices oa);
    OrdersArticlesServices delete(int id);
}
