
package com.facturacionbilling.backfacturacionbilling;

/**
 *
 * @author Carlos Torres
 */
import javax.persistence.*;

@Entity
@Table(name = "user_type")

public class UserType {
    
     @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String type;
    @Column
    private char state;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public char getState() {
        return state;
    }

    public void setState(char state) {
        this.state = state;
    }
    
    
    
}
