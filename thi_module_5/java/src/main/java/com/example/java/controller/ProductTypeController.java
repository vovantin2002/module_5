package com.example.java.controller;

import com.example.java.service.IProductService;
import com.example.java.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/productType")
@CrossOrigin
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    @ResponseBody
    public ResponseEntity display() {
        return new ResponseEntity<>(productTypeService.display(), HttpStatus.OK);
    }
}
