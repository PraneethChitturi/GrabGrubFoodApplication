package com.example.GrabGrubApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.GrabGrubApp.model.Food;
import com.example.GrabGrubApp.model.Restaurant;
import com.example.GrabGrubApp.model.User;
import com.example.GrabGrubApp.request.CreateFoodRequest;
import com.example.GrabGrubApp.response.MessageResponse;
import com.example.GrabGrubApp.service.FoodService;
import com.example.GrabGrubApp.service.RestaurantService;
import com.example.GrabGrubApp.service.UserService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.searchFood(name);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantsFood(@RequestParam(required = false) boolean vegeterian,
            @RequestParam(required = false) boolean seasonal,
            @RequestParam(required = false) boolean nonveg,
            @PathVariable Long restaurantId,
            @RequestParam(required = false) String foodCategory,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.getRestaurantsFood(restaurantId, vegeterian, nonveg, seasonal, foodCategory);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }

}
