
package com.facturacionbilling.backfacturacionbilling;

import java.util.List;


/**
 *
 * @author Carlos Torres
 */
public interface ArticlesServicesServiceRepositorio {
     // declarar los metodos como es con sprint
    ArticlesServices save(ArticlesServices as);
    List<ArticlesServices>findAll();
    ArticlesServices findOne(int id);
    void delete(ArticlesServices as);
}
