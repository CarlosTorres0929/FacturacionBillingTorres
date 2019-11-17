
package com.facturacionbilling.backfacturacionbilling;

/**
 *
 * @author Carlos Torres
 */
import javax.persistence.*;

@Entity
@Table(name = "orders_articles_services")

public class OrdersArticlesServices {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private int article_service_id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getArticle_service_id() {
        return article_service_id;
    }

    public void setArticle_service_id(int article_service_id) {
        this.article_service_id = article_service_id;
    }
    
    
}
