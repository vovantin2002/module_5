package com.example.java.repository;

import com.example.java.model.Product;
import com.example.java.model.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
    @Query(value = "select * from product_type ", nativeQuery = true)
    List<ProductType> findAll();
}
