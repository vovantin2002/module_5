package com.example.java.service;

import com.example.java.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductService {
    Page display(Pageable pageable);

    void add(Product product);

    void delete(int id);

    void edit(Product product);

    Product findById(int id);

    Page<Product> search(String name, String productType, Pageable pageable);
}
