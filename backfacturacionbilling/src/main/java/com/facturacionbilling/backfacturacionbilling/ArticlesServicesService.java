
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;
import org.springframework.data.repository.Repository;
/**
 *
 * @author Carlos Torres
 */
public interface ArticlesServicesService {
    
    ArticlesServices add(ArticlesServices as);
    List<ArticlesServices>listar();
    ArticlesServices listarId(int id);
    ArticlesServices edit(ArticlesServices as);
    ArticlesServices delete(int id);
}
