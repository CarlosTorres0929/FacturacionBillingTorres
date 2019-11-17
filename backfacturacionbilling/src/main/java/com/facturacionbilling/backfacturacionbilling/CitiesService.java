
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Carlos Torres
 */
public interface CitiesService {
     // metodos para el crud

    Cities add(Cities ct);
    List<Cities>listar();
    Cities listarId(int id);
    Cities edit(Cities ct);
    Cities delete(int id);
}
