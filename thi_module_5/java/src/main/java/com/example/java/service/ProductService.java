package com.example.java.service;

import com.example.java.model.Product;
import com.example.java.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page display(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void add(Product product) {
        productRepository.insertProduct(product.getName(), product.getDateAdded(), product.getQuantity(), product.getProductType().getId());
    }

    @Override
    public void delete(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public void edit(Product product) {
        productRepository.updateProduct(product.getId(), product.getName(), product.getDateAdded(), product.getQuantity(), product.getProductType().getId());
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public Page<Product> search(String name, String productType, Pageable pageable) {
        return productRepository.search(name, productType, pageable);
    }
}
