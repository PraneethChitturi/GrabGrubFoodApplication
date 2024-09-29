package com.example.GrabGrubApp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GrabGrubApp.model.CartItem;
import com.example.GrabGrubApp.model.Order;
import com.example.GrabGrubApp.model.User;
import com.example.GrabGrubApp.request.AddCartItemRequest;
import com.example.GrabGrubApp.request.OrderRequest;
import com.example.GrabGrubApp.response.PaymentResponse;
import com.example.GrabGrubApp.service.OrderService;
import com.example.GrabGrubApp.service.PaymentService;
import com.example.GrabGrubApp.service.UserService;

@RestController
@RequestMapping("/api")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(@RequestBody OrderRequest req,
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req, user);
        return new ResponseEntity<>(order, HttpStatus.OK);

    }

    // @PostMapping("/order")
    // public ResponseEntity<PaymentResponse> createOrder(@RequestBody OrderRequest
    // req,
    // @RequestHeader("Authorization") String jwt) throws Exception {
    // User user = userService.findUserByJwtToken(jwt);
    // Order order = orderService.createOrder(req, user);
    // PaymentResponse res = paymentService.createPaymentLink(order);
    // return new ResponseEntity<>(res, HttpStatus.OK);
    //
    // }

    @GetMapping("/orders/user")
    public ResponseEntity<List<Order>> getOrderHistory(
            @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order> orders = orderService.getUsersOrder(user.getId());
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }
}
