package com.example.java.model;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

public class ProductDto implements Validator {
    private int id;
    @Size(max = 100, message = "Ten khong duoc dai qua 100 ki tu")
    private String name;
    private String dateAdded;
    @Min(value = 1, message = "So luong san pham phai la so duong ")
    private int quantity;
    private ProductType productType;

    public ProductDto(int id, String name, String dateAdded, int quantity, ProductType productType) {
        this.id = id;
        this.name = name;
        this.dateAdded = dateAdded;
        this.quantity = quantity;
        this.productType = productType;
    }

    public ProductDto() {
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
