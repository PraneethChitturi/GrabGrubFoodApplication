package com.example.GrabGrubApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GrabGrubApp.model.IngredientCategory;
import com.example.GrabGrubApp.model.IngredientsItem;
import com.example.GrabGrubApp.request.IngredientCategoryRequest;
import com.example.GrabGrubApp.request.IngredientItemRequest;
import com.example.GrabGrubApp.service.IngredientsService;
import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    private ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest req)
            throws Exception {
        IngredientCategory item = ingredientsService.createIngredientCategory(req.getName(), req.getRestaurantId());

        return new ResponseEntity<>(item, HttpStatus.CREATED);

    }

    @PostMapping()
    private ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody IngredientItemRequest req)
            throws Exception {
        IngredientsItem item = ingredientsService.createIngredientsItem(req.getRestaurantId(), req.getName(),
                req.getCategoryId());

        return new ResponseEntity<>(item, HttpStatus.CREATED);

    }

    @PutMapping("/{id}/stock")
    private ResponseEntity<IngredientsItem> updateIngredientStock(@PathVariable Long id)
            throws Exception {
        IngredientsItem item = ingredientsService.updateStock(id);

        return new ResponseEntity<>(item, HttpStatus.OK);

    }

    @GetMapping("/restaurant/{id}")
    private ResponseEntity<List<IngredientsItem>> getRestaurantIngredients(@PathVariable Long id)
            throws Exception {
        List<IngredientsItem> items = ingredientsService.findRestaurantIngredients(id);

        return new ResponseEntity<>(items, HttpStatus.OK);

    }

    @GetMapping("/restaurant/{id}/category")
    private ResponseEntity<List<IngredientCategory>> getRestaurantIngreditentCategory(@PathVariable Long id)
            throws Exception {
        List<IngredientCategory> items = ingredientsService.findIngredientCategoryByRestaurantId(id);

        return new ResponseEntity<>(items, HttpStatus.OK);

    }
}
