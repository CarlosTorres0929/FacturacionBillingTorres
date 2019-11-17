
package com.facturacionbilling.backfacturacionbilling;

import javax.persistence.*;

@Entity
@Table(name = "bills")

/**
 *
 * @author Carlos Torres
 */
public class Bills {
     @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String expedition_date;
    @Column
    private String due_date;
    @Column
    private String receip_date;
     @Column
    private int bill_state_id;
    @Column
    private int user_id;
}
