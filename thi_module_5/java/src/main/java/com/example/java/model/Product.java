package com.example.java.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String dateAdded;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "productType_id", referencedColumnName = "id")
    private ProductType productType;

    public Product(int id, String name, String dateAdded, int quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.dateAdded = dateAdded;
        this.quantity = quantity;
        this.productType = productType;
    }

    public Product() {
    }

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

    public String getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(String dateAdded) {
        this.dateAdded = dateAdded;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}
