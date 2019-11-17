
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;
/**
 *
 * @author Carlos Torres
 */
public interface BillStatesService {
    
    BillStates add(BillStates bs);
    List<BillStates>listar();
    BillStates listarId(int id);
    BillStates edit(BillStates bs);
    BillStates delete(int id);
}
