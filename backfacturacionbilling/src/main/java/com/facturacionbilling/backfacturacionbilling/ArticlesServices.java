
package com.facturacionbilling.backfacturacionbilling;

/**
 *
 * @author Carlos Torres
 */

import javax.persistence.*;

@Entity
@Table(name = "articles_services")

public class ArticlesServices {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private char category;
    @Column
    private String name;
    @Column
    private int price;
    @Column
    private int stock;
    
}
