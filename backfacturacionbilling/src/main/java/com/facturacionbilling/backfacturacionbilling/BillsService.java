
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;
/**
 *
 * @author Carlos Torres
 */
public interface BillsService {
    Bills add(Bills bl);
    List<Bills>listar();
    Bills listarId(int id);
    Bills edit(Bills bl);
    Bills delete(int id);
}
