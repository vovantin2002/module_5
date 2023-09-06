package com.example.java.controller;

import com.example.java.model.Product;
import com.example.java.model.ProductDto;
import com.example.java.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    @ResponseBody
    public ResponseEntity display(@PageableDefault(size = 4, sort = "quantity", direction = Sort.Direction.DESC)
                                  Pageable pageable, @RequestParam(value = "name",
            defaultValue = "") String name, @RequestParam(value = "productType", defaultValue = "") String productType) {
        return new ResponseEntity<>(productService.search(name, productType, pageable), HttpStatus.OK);
    }

    //    @GetMapping("")
//    @ResponseBody
//    public ResponseEntity display(){
//        return new ResponseEntity<>(productService.display(), HttpStatus.OK);
//    }
    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity findById(@PathVariable("id") int id) {
        return new ResponseEntity<>(productService.findById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity delete(@PathVariable("id") int id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("")
    @ResponseBody
    public ResponseEntity add(@Valid @RequestBody ProductDto productDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<FieldError> errors = bindingResult.getFieldErrors();
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : errors) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDto, product);
        productService.add(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("")
    @ResponseBody
    public ResponseEntity edit(@Valid @RequestBody ProductDto productDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<FieldError> errors = bindingResult.getFieldErrors();
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : errors) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDto, product);
        productService.edit(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
