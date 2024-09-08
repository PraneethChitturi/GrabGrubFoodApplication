package com.example.GrabGrubApp.service;

import java.util.List;

import com.example.GrabGrubApp.model.Category;
import com.example.GrabGrubApp.model.Food;
import com.example.GrabGrubApp.model.Restaurant;
import com.example.GrabGrubApp.request.CreateFoodRequest;

public interface FoodService {
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantsFood(Long restaurantId, boolean isVegeterian, boolean isNonveg, boolean isSeasonal,
            String foodCategory);

    public List<Food> searchFood(String keyword);

    public Food findFoodById(Long foodId) throws Exception;

    public Food updateAvailabilityStatus(Long foodId) throws Exception;

}
