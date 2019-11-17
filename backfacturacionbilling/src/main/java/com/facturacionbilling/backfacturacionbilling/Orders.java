
package com.facturacionbilling.backfacturacionbilling;

import javax.persistence.*;

@Entity
@Table(name = "orders")

/**
 *
 * @author Carlos Torres
 */
public class Orders {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private int quantity;
}
