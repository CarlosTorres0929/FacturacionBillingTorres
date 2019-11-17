
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;

/**
 *
 * @author Carlos Torres
 */
public interface BillStatesServiceRepositorio {
         // declarar los metodos como es con sprint
    BillStates save(BillStates bs);
    List<BillStates>findAll();
    BillStates findOne(int id);
    void delete(BillStates bs);
}
