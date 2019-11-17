
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;

/**
 *
 * @author Carlos Torres
 */
public interface BillsServiceRepositorio {
           // declarar los metodos como es con sprint
    Bills save(Bills bl);
    List<Bills>findAll();
    Bills findOne(int id);
    void delete(Bills bl);
}
