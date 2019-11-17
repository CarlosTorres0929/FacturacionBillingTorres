
package com.facturacionbilling.backfacturacionbilling;

import javax.persistence.*;

@Entity
@Table(name = "cities")

/**
 *
 * @author Carlos Torres
 */
public class Cities {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    
    
}
