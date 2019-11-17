
package com.facturacionbilling.backfacturacionbilling;

import javax.persistence.*;

@Entity
@Table(name = "countries")

/**
 *
 * @author Carlos Torres
 */
public class Countries {
    
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
