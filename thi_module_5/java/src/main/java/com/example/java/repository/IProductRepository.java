package com.example.java.repository;

import com.example.java.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from products ", nativeQuery = true)
    Page<Product> findAll(Pageable pageable);

    @Query(value = "select * from products where products.id=:id", nativeQuery = true)
    Product findById(@Param("id") int id);

    @Modifying
    @Query(value = "DELETE FROM products WHERE id = :id", nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE products SET name = :name, date_added = :dateAdded, quantity = :quantity, product_type_id = :productType WHERE id = :id", nativeQuery = true)
    void updateProduct(@Param("id") int id, @Param("name") String name, @Param("dateAdded") String dateAdded, @Param("quantity") int quantity, @Param("productType") int productType);

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO products ( name, date_added, quantity, product_type_id) VALUES ( :name, :dateAdded, :quantity, :productType)", nativeQuery = true)
    void insertProduct(@Param("name") String name, @Param("dateAdded") String dateAdded, @Param("quantity") int quantity, @Param("productType") int productType);

    @Query(value = "select * from products where (products.name like concat('%',:name,'%') or :name='') and (products.product_type_id=:productType or :productType='') ", nativeQuery = true)
    Page<Product> search(@Param("name") String name, @Param("productType") String productType, Pageable pageable);
}
